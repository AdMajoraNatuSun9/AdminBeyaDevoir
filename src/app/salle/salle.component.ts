import { Component, OnInit } from '@angular/core';
import { Salle } from '../models/salle';
import { SalleService } from '../services/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{

    salle?: Salle[]

    intitule?: string;
    Emploisdutemps?: any;
    
    salles: Salle=new Salle();

  // Constructeur avec injection de SalleService
  constructor(public salleService: SalleService) {}

  // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  // liées aux données d'une directive.Salle

  ngOnInit(): void {
    this.OngetAllSalle()
  }

  // Récupère toutes les Salles
  OngetAllSalle(): void {
    this.salleService.getAllSalle().subscribe({
      next: (data) => {
        this.salle = data
        console.log(this.salle)
        
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }
  //-----------------------------------------------

  // Enregistre une Salle
  OnsaveSalle(): void {
    this.salleService.saveSalle(this.salles).subscribe({
      next: (data) => {
        this.salles = data
        this.OngetAllSalle()
        this.clearSalle()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }
  
  // ------------------------------------------------------
 
  // Récupère une seule-Salle par ID
  OngetSalle(ID: number): void {
    this.salleService.getSalle(ID).subscribe({
      next: (data) => {
        // Gérez
        this.salles = data
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }
  
//#--------------------------------------------------------

  // Supprime une Salle par ID
  OndeleteSalle(id: number): void {
    this.salleService.deleteSalle(id).subscribe({
      next: () => {
        alert('Salle supprimée avec succès !!!')
        this.OngetAllSalle()
      },
      error: (err) => {
        // Gérer ou journaliser l'erreur
      },
    })
  }

//#--------------------------------------------------------
//#--------------------------------------------------------


  // Efface le modèle de Salle
  clearSalle(): void {
        this.salles.id = 0
        this.salles.intitule = ''
  }
}
//--------------------------------------------------------------
//--------------------------------------------------------------