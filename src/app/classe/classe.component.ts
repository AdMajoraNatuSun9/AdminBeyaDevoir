import { Component, OnInit } from '@angular/core'
import { Classe } from '../models/classe'
import { ClasseService } from '../services/classe.service'

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css'],
})
export class ClasseComponent implements OnInit {
  classe?: Classe[]
  
  intitule!: string
  code!: string
  etat!: any
  
  //cours?: any

  classes: Classe = new Classe()

  // Constructeur avec injection de ClasseService
  constructor(public classeService: ClasseService) {}

  // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  //liées aux données d'une directive.

  ngOnInit(): void {
    this.OngetAllClasse()
  }

  // Récupère toutes les Classes
  OngetAllClasse(): void {
    this.classeService.getAllClasse().subscribe({
      next: (data) => {
        this.classe = data
        //console.log(this.classe)
        
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Enregistre une Classe
  OnsaveClasse(): void {
    this.classeService.saveClasse(this.classes).subscribe({
      next: (data) => {
        this.classes = data
        this.OngetAllClasse()
        this.clearClasse()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Récupère une seule Classe par ID
  OngetClasse(ID: number): void {
    this.classeService.getClasse(ID).subscribe({
      next: (data) => {
        this.classes = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Supprime une Classe par ID
  OndeleteClasse(id: number): void {
    this.classeService.deleteClasse(id).subscribe({
      next: () => {
        alert('Classe supprimée avec succès')
        this.OngetAllClasse()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Efface le modèle de Classe
  clearClasse(): void {
    this.classes.id = 0
    this.classes.intitule = ''
    this.classes.code = ''
    this.classes.etat = ''
  }
}
