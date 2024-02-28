import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Anneescolaire } from '../models/anneescolaire'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AnneescolaireService {
  constructor(private httpClient: HttpClient) {}

  // Cette fonction récupère toutes les années scolaires depuis le backend
  public getAllAnneescolaire(): Observable<Anneescolaire[]> {
    return this.httpClient.get<Anneescolaire[]>(
      environment.backendHost + 'anneescolaire/All',
    )
  }

  // Cette fonction supprime une année scolaire spécifique en utilisant son ID
  public deleteAnneeScolaire(ID: number) {
    return this.httpClient.delete(
      environment.backendHost + 'anneescolaire/Delete/' + ID,
    )
  }

  // Cette fonction récupère une année scolaire spécifique en utilisant son ID
  public getAnneeScolaire(ID: number): Observable<Anneescolaire> {
    return this.httpClient.get<Anneescolaire>(
      environment.backendHost + 'anneescolaire/Get/' + ID,
    )
  }

  // Cette fonction enregistre une nouvelle année scolaire
  public saveAnneeScolaire(
    anneescolaire: Anneescolaire,
  ): Observable<Anneescolaire> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer l'année scolaire
    return this.httpClient.post<Anneescolaire>(
      environment.backendHost + 'anneescolaire/Save',
      anneescolaire,
      { headers },
    )
  }
}
