import { Component, OnInit } from '@angular/core'
import { Emploisdutemps } from '../models/emploisdutemps'
import { EmploisdutempsService } from '../services/emploisdutemps.service'
import { timestamp } from 'rxjs'
import { Cours } from '../models/cours'
import { Salle } from '../models/salle'
import { Jours } from '../models/jours'
import { SalleService } from '../services/salle.service'
import { CoursService } from '../services/cours.service'
import { JoursService } from '../services/jours.service'
import { Matiere } from '../models/matiere'
import { MatiereService } from '../services/matiere.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Time } from '@angular/common'

@Component({
  selector: 'app-emploisdutemps',
  templateUrl: './emploisdutemps.component.html',
  styleUrls: ['./emploisdutemps.component.css'],
})
export class EmploisdutempsComponent implements OnInit {
  emploisdutemps?: Emploisdutemps[]

  heureDebut?: Time
  heureFin?: Time
  salles?: Salle[]
  cours?: Cours[]
  jours?: Jours[]
  matieres?: Matiere[]

  emploisdutemp: Emploisdutemps = new Emploisdutemps()

  myForm!: FormGroup // cree un objet reactive forms

  // Constructeur avec injection de EmploisdutempsService
  constructor(
    public emploisdutempsService: EmploisdutempsService,
    public salleService: SalleService,
    public coursService: CoursService,
    public joursService: JoursService,
    public matiereService: MatiereService,

    private fb: FormBuilder,
  ) {}

  // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  //liées aux données d'une directive.

  ngOnInit(): void {
    this.OngetAllEmploisdutemps()
    this.OngetAllCours()
    this.OngetAllJours()
    this.OngetAllSalle()
    this.OngetAllMatiere()

    // //Initialisation du formGroup pour manipulation
    this.myForm = new FormGroup({
      //id: new FormControl('', Validators.required),
      cour: new FormControl('', Validators.required),
      jour: new FormControl('', Validators.required),
      salle: new FormControl('', Validators.required),
      matiere: new FormControl('', Validators.required),
      heureDebut: new FormControl('',),
      heureFin: new FormControl('',),
    })

    // // Initialize the form group for manipulation
    // this.myForm = this.fb.group({
    //   id: ['', Validators.required],
    //   cour: ['', Validators.required],
    //   jour: ['', Validators.required],
    //   salle: ['', Validators.required],
    //   //matiere: ['', Validators.required],
    //   heureDebut: ['', Validators.required],
    //   heureFin: ['', Validators.required],
    // })
  }

  // Récupère ts les Emploisdutemps
  OngetAllEmploisdutemps(): void {
    this.emploisdutempsService.getAllEmploisdutemps().subscribe({
      next: (data) => {
        this.emploisdutemps = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Enregistre 1 Emploisdutemps
  OnsaveEmploisdutemps(): void {
    console.log(this.myForm.value)

    this.emploisdutempsService.saveEmploisdutemps(this.myForm.value).subscribe({
      next: (data) => {
        this.emploisdutemp = data
        console.log('Emploisdutemp:', this.emploisdutemp); // Ajout de cette ligne pour afficher les données reçues
        this.OngetAllEmploisdutemps()
        this.clearEmploisdutemps()
      },
      error: (err) => {
        console.error('Error saving Emploisdutemps:', err)
        alert('System error or duplicate data')
      },
    })
  }

  // Récupère un seul Emploisdutemps par ID
  OngetEmploisdutemps(id: number): void {
    this.emploisdutempsService.getEmploisdutemps(id).subscribe({
      next: (data) => {
        this.emploisdutemp = data
        //recuperation indexe des données
        this.myForm.patchValue({
          //id: this.emploisdutemp.id,
          cour: this.emploisdutemp.cours.matiere.id,
          jour: this.emploisdutemp.jours.id,
          salle: this.emploisdutemp.salle.id,
          matiere: this.emploisdutemp.cours.matiere.id,
          heureDebut: this.emploisdutemp.heureDebut.id,
          heureFin: this.emploisdutemp.heureFin.id,
        })
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Supprime un Emploisdutemps par ID
  OndeleteEmploisdutemps(id: number): void {
    this.emploisdutempsService.deleteEmploisdutemps(id).subscribe({
      next: () => {
        alert('Emploisdutemps supprimé avec succès')
        this.OngetAllEmploisdutemps()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Efface le modèle de Classe
  clearEmploisdutemps(): void {
    this.emploisdutemp = new Emploisdutemps()
    this.myForm.reset({})
  }

  OngetAllSalle(): void {
    this.salleService.getAllSalle().subscribe({
      next: (data) => {
        this.salles = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  OngetAllCours(): void {
    this.coursService.getAllCours().subscribe({
      next: (data) => {
        this.cours = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  OngetAllJours(): void {
    this.joursService.getAllJours().subscribe({
      next: (data) => {
        this.jours = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  OngetAllMatiere(): void {
    this.matiereService.getAllMatiere().subscribe({
      next: (data) => {
        this.matieres = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }
}
