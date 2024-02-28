import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Salle } from '../models/salle'

@Injectable({
  providedIn: 'root',
})
export class SalleService {
  //constructor() { }

  constructor(private httpClient: HttpClient) {}

  public getAllSalle(): Observable<Salle[]> {
    return this.httpClient.get<Salle[]>(environment.backendHost + 'salle/All')
  }

  public deleteSalle(ID: number) {
    return this.httpClient.delete(
      environment.backendHost + 'salle/Delete/' + ID,
    )
  }

  // Cette fonction récupère 1 *** spécifique en utilisant son ID
  public getSalle(ID: number): Observable<Salle> {
    return this.httpClient.get<Salle>(
      environment.backendHost + 'salle/Get/' + ID,
    )
  }

  // Cette fonction enregistre une nouvelle ****
  public saveSalle(salle: Salle): Observable<Salle> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer l'****
    return this.httpClient.post<Salle>(
      environment.backendHost + 'salle/Save',
      salle,
      { headers },
    )
  }
}
