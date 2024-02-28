import { Component, OnInit } from '@angular/core';
import { Jours} from '../models/jours';
import { JoursService } from '../services/jours.service';

@Component({
  selector: 'app-jours',
  templateUrl: './jours.component.html',
  styleUrls: ['./jours.component.css']
})
export class JoursComponent  implements OnInit{

      jour?: Jours[]
      
      intitule?: string;
      Emploisdutemps?: any;
      
      jours: Jours = new Jours()

    // Constructeur avec injection de JoursService
  constructor(public joursService: JoursService) {}

    // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  //liées aux données d'une directive.Jours

  ngOnInit(): void {
    this.OngetAllJours()
  }

  // Récupère toutes les Jours ------------------------------
  OngetAllJours(): void {
    this.joursService.getAllJours().subscribe({
      next: (data) => {
        this.jour = data
        console.log(this.jour)
        
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }
  

  
  // Enregistre un Jour -------------------------------------
  OnsaveJour(): void {
    this.joursService.saveJours(this.jours).subscribe({
      next: (data) => {
        this.jours = data
        this.OngetAllJours()
        this.clearJour()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }


  // Récupère une seul-Jour par ID--------------------------

  OngetJour(ID: number): void {
    this.joursService.getJours(ID).subscribe({
      next: (data) => {
        this.jours = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

    // Supprime un Jour par ID--------------------------
  OndeleteJour(id: number): void {
    this.joursService.deleteJours(id).subscribe({
      next: () => {
        alert('Jour supprimé avec succès !!!')
        this.OngetAllJours()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

  // Efface le modèle de Jour
  clearJour(): void {
    this.jours = new Jours()
  }

}

