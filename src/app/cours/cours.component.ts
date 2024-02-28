import { Component, OnInit } from '@angular/core'
import { Cours } from '../models/cours'
import { CoursService } from '../services/cours.service'
import { EnseignantService } from '../services/enseignant.service'
import { Enseignant } from '../models/enseignant'
import { MatiereService } from '../services/matiere.service'
import { Matiere } from '../models/matiere'
import { Classe } from '../models/classe'
import { ClasseService } from '../services/classe.service'
import { AnneescolaireService } from '../services/anneescolaire.service'
import { Anneescolaire } from '../models/anneescolaire'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
})
export class CoursComponent implements OnInit {
  idens:any;
  cours?: Cours[]

  enseignants?: Enseignant[]
  matieres?: Matiere[]
  classes?: Classe[]
  anneescolaires?: Anneescolaire[]

  Cour: Cours = new Cours()

  myForm!: FormGroup; // cree un objet reactive forms

  // Constructeur avec injection de CoursService
  constructor(
    public coursService: CoursService,
    public enseignantService: EnseignantService,
    public matiereService: MatiereService,
    public classeService: ClasseService,
    public anneescolaireService: AnneescolaireService,
    private fb : FormBuilder
  ) {}

  // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  //liées aux données d'une directive.

  ngOnInit(): void {
    this.OngetAllCours();
    this.OngetAllEnseignant();
    this.OngetAllMatiere();
    this.OngetAllClasse();
    this.OngetAllAnneescolaire();
    //Initialisation du formGroup pour manipulation
    this.myForm = new FormGroup ({
      id : new FormControl('',Validators.required),
      classe : new FormControl('',Validators.required),
      matiere : new FormControl('',Validators.required),
      enseignant : new FormControl('',Validators.required),
      anneescolaire : new FormControl('',Validators.required)
    })

    console.log(this.myForm .value)
  }

  // Récupère tous les Cours
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

  // Enregistre un Cours
  OnsaveCours(): void {
    console.log(this.myForm.value)
  
    this.coursService.saveCours(this.myForm.value).subscribe({
      next: (data) => {
        this.Cour = data
        this.OngetAllCours()
        this.clearCours()

        
      },
      error: (err) => {
        alert("erreur systeme ou donne en duplicate")
      },
    })
  }

  // Récupère un seul Cours par ID
  OngetCours(id: number): void {
    this.coursService.getCours(id).subscribe({
      next: (data) => {
        this.Cour = data
        //recuperation indexe des données
        this.myForm.patchValue({
              id : this.Cour.id,
              classe : this.Cour.classe.id,
              matiere : this.Cour.matiere.id,
              enseignant : this.Cour.enseignant.id,
              anneescolaire : this.Cour.anneescolaire.id
        });
        
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Supprime un Cours par ID
  OndeleteCours(id: number): void {
    this.coursService.deleteCours(id).subscribe({
      next: () => {
        alert('Cours supprimé avec succès')
        this.OngetAllCours()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Efface le modèle de Classe
   clearCours(): void {
 
    this.Cour = new Cours;
    this.myForm.reset({});
   }

  OngetAllEnseignant(): void {
    this.enseignantService.getAllEnseignant().subscribe({
      next: (data) => {
        this.enseignants = data
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

  OngetAllClasse(): void {
    this.classeService.getAllClasse().subscribe({
      next: (data) => {
        this.classes = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  OngetAllAnneescolaire(): void {
    this.anneescolaireService.getAllAnneescolaire().subscribe({
      next: (data) => {
        this.anneescolaires = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }
}
