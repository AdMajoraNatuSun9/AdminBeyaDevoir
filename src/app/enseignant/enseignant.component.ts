import { Component, OnInit } from '@angular/core'
import { Enseignant } from '../models/enseignant'
import { EnseignantService } from '../services/enseignant.service'

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css'],
})
export class EnseignantComponent implements OnInit {
  enseignant?: Enseignant[]

  matricule?: String
  noms?: String
  prenoms?: String
  telephone?: String
  emailAddress?: String
  etat?: any

  enseignants: Enseignant = new Enseignant()  || undefined

  // Constructeur avec injection de EnseignantService
  constructor(public enseignantService: EnseignantService) {}

  // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  //liées aux données d'une directive.

 

  ngOnInit(): void {
    this.OngetAllEnseignant()
  }

  // Récupère tous les Enseignants
  OngetAllEnseignant(): void {
    this.enseignantService.getAllEnseignant().subscribe({
      next: (data) => {
        this.enseignant = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Enregistre 1 Enseignant
  OnsaveEnseignant(): void {
    this.enseignantService.saveEnseignant(this.enseignants).subscribe({
      next: (data) => {
        this.enseignants = data
        this.OngetAllEnseignant()
        this.clearEnseignant()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Récupère 1 seul-Enseignant par ID
  OngetEnseignant(ID: number): void {
    this.enseignantService.getEnseignant(ID).subscribe({
      next: (data) => {
        this.enseignants = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }


  // Supprime 1 Enseignant par ID
  OndeleteEnseignant(id: number): void {
    this.enseignantService.deleteEnseignant(id).subscribe({
      next: () => {
        alert('Enseignant supprimé avec succès')
        this.OngetAllEnseignant()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }
  

  // Efface le modèle de Enseignant
  clearEnseignant(): void {
    this.enseignants.id = 0
    this.enseignants.matricule = ''
    this.enseignants.noms = ''
    this.enseignants.prenoms = ''
    this.enseignants.emailAddress = ''
    this.enseignants.telephone = ''
    this.enseignants.etat = ''
  }
}
