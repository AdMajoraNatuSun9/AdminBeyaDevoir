import { Component, OnInit } from '@angular/core'
import { Matiere } from '../models/matiere'
import { MatiereService } from '../services/matiere.service'
import { NgModule } from '@angular/core'

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css'],
})

export class MatiereComponent implements OnInit {
  matiere?: Matiere[]

  intitule!: String
  code?: String
  cours?: any

  matieres: Matiere = new Matiere()

  // Constructeur avec injection de MatiereService
  constructor(public matiereService: MatiereService) {}

  // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  //liées aux données d'une directive.Matiere

  ngOnInit(): void {
    this.OngetAllMatiere()
  }

  // Récupère tous les Matieres
  OngetAllMatiere(): void {
    this.matiereService.getAllMatiere().subscribe({
      next: (data) => {
        this.matiere = data
        console.log(this.matiere)

      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Enregistre une Matiere
  OnsaveMatiere(): void {
    this.matiereService.saveMatiere(this.matieres).subscribe({
      next: (data) => {
        this.matieres = data
        this.OngetAllMatiere()
        this.clearMatiere()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Récupère une seule-Matiere par ID
  OngetMatiere(ID: number): void {
    this.matiereService.getMatiere(ID).subscribe({
      next: (data) => {
        this.matieres = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Supprime une Matiere par ID -----------------------------------------
  OndeleteMatiere(id: number): void {
    this.matiereService.deleteMatiere(id).subscribe({
      next: () => {
        alert('Enseignant supprimé avec succès')
        this.OngetAllMatiere()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Efface le modèle de Enseignant
  clearMatiere(): void {
    this.matieres.id = 0
    this.matieres.intitule = ''
    this.matieres.code = ''
    //this.matieres.cours = ''
  }
}
