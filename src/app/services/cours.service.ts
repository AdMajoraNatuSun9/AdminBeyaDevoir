import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Cours } from '../models/cours'

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  constructor(private httpClient: HttpClient) {}

  // Cette fonction récupère tous les Cours depuis le backend
  public getAllCours(): Observable<Cours[]> {
    return this.httpClient.get<Cours[]>(environment.backendHost + 'cours/All')
  }

  // Cette fonction supprime un Cours spécifique en utilisant son ID
  public deleteCours(ID: number): Observable<any> {
    return this.httpClient.delete(
      environment.backendHost + 'cours/Delete/' + ID,
    )
  }

  // Cette fonction récupère un Cours spécifique en utilisant son ID
  public getCours(ID: number): Observable<Cours> {
    return this.httpClient.get<Cours>(
      environment.backendHost + 'cours/Get/' + ID,
    )
  }

  // Cette fonction enregistre un nouveau Cours
  public saveCours(cours: Cours): Observable<Cours> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer l'année scolaire
    return this.httpClient.post<Cours>(
      environment.backendHost + 'cours/Save',
      cours,
      { headers },
    )
  }
}
