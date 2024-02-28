import { Component } from '@angular/core'
import { Anneescolaire } from '../models/anneescolaire'
import { AnneescolaireService } from '../services/anneescolaire.service'

@Component({
  selector: 'app-anneescolaire',
  templateUrl: './anneescolaire.component.html',
  styleUrls: ['./anneescolaire.component.css'],
})
export class AnneescolaireComponent {
  anneescolaire?: Anneescolaire[]

  code?: string
  dateDebut?: Date
  dateFin?: Date
  etat?:any

  anneescolaires: Anneescolaire = new Anneescolaire()

  // Constructeur avec injection de  lANNE-SCOLService
  constructor(public anneescolaireService: AnneescolaireService) {}

  // Hook de cycle de vie appelé après que Angular a initialisé toutes les propriétés
  //liées aux données d'une directive.
  ngOnInit() {
    this.OngetAllAnneescolaire()
  }

  // Récupère tous les  ANNE-SCOL
  OngetAllAnneescolaire() {
    this.anneescolaireService.getAllAnneescolaire().subscribe({
      next: (data) => {
        this.anneescolaire = data
      },
      error: (err) => {},
    })
  }

  // Enregistre une ANNE-SCOL
  OnsaveAnneescolaire() {
    this.anneescolaireService.saveAnneeScolaire(this.anneescolaires).subscribe({
      next: (data) => {
        this.anneescolaires = data
        this.OngetAllAnneescolaire()
        this.OnVideAnneescolaire()
      },
      error: (err) => {},
    })
  }

  // Récupère un seul  lANNE-SCOL par ID
  OngetAnneescolaire(ID: number) {
    // Assurez-vous d'avoir un identifiant unique pour lANNE-SCOL que vous souhaitez mettre à jour
    this.anneescolaireService.getAnneeScolaire(ID).subscribe({
      next: (data) => {
        // Gérez
        this.anneescolaires = data
      },
      error: (err) => {
        // Gérez les erreurs de la mise à jour de l lANNE-SCOL
      },
    })
  }

  // Supprime un  lANNE-SCOL par ID
  OndeleteAnneescolaire(id: number) {
    this.anneescolaireService.deleteAnneeScolaire(id).subscribe({
      next: () => {
        alert('Anneescolaire supprimé avec succès')
        this.OngetAllAnneescolaire()
      },
      error: (err) => {
        // Gérez les erreurs de la suppression du  lANNE-SCOL
      },
    })
  }

  // Efface le modèle de  lANNE-SCOL
  OnVideAnneescolaire() {
    this.anneescolaires.id = 0
    this.anneescolaires.code = ''
    this.anneescolaires.dateDebut = new Date()
    this.anneescolaires.dateFin = new Date()

    //this.produit.designation = ''

    //this.produit.qteStock = 0
    //this.produit.prixVenteTTC = 0
    //this.produit.prixVenteTVA = 0
    //this.produit.prixVenteHT = 0

    //this.produit.alertStock = 0
    //his.produit.prixUAchatHT = 0
    //this.produit.prixUAchatTTC = 0

    // Utilisez la date actuelle comme date par défaut
    //this.produit.dateNewStock = new Date()
    //this.produit.dateArticleEntre = new Date()
    //this.produit.dateOldStock = new Date()

    //this.produit.familleProduit = 0
    //this.produit.uniteMesure = 0
    // Set date properties to the current date
    //this.produit.dateNewStock = new Date().toISOString()
    //this.produit.dateArticleEntre = new Date().toISOString()
  }
}
