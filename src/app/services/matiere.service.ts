import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Matiere } from '../models/matiere'

@Injectable({
  providedIn: 'root',
})
export class MatiereService {
  constructor(private httpClient: HttpClient) {}

  // Cette fonction récupère toutes les Matieres depuis le backend
  public getAllMatiere(): Observable<Matiere[]> {
    return this.httpClient.get<Matiere[]>(
      environment.backendHost + 'matiere/All',
    )
  }

  // Cette fonction supprime une Matiere spécifique en utilisant son ID
  public deleteMatiere(ID: number): Observable<any> {
    return this.httpClient.delete(
      environment.backendHost + 'matiere/Delete/' + ID,
    )
  }

  // Cette fonction récupère une Matiere spécifique en utilisant son ID
  public getMatiere(ID: number): Observable<Matiere> {
    return this.httpClient.get<Matiere>(
      environment.backendHost + 'matiere/Get/' + ID,
    )
  }

  // Cette fonction enregistre une Matiere
  public saveMatiere(matiere: Matiere): Observable<Matiere> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer la Matiere
    return this.httpClient.post<Matiere>(
      environment.backendHost + 'matiere/Save',
      matiere,
      { headers },
    )
  }
}
