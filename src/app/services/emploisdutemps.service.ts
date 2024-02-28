import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Emploisdutemps } from '../models/emploisdutemps'

@Injectable({
  providedIn: 'root',
})
export class EmploisdutempsService {
  constructor(private httpClient: HttpClient) {}

  // Cette fonction récupère tous les Emploisdutemps depuis le backend
  public getAllEmploisdutemps(): Observable<Emploisdutemps[]> {
    return this.httpClient.get<Emploisdutemps[]>(
      environment.backendHost + 'emploisdutemps/All',
    )
  }

  // Cette fonction supprime un Emploisdutemps spécifique en utilisant son ID
  public deleteEmploisdutemps(ID: number): Observable<any> {
    return this.httpClient.delete(
      environment.backendHost + 'emploisdutemps/Delete/' + ID,
    )
  }

  // Cette fonction récupère un Emploisdutemps spécifique en utilisant son ID
  public getEmploisdutemps(ID: number): Observable<Emploisdutemps> {
    return this.httpClient.get<Emploisdutemps>(
      environment.backendHost + 'emploisdutemps/Get/' + ID,
    )
  }

  // Cette fonction enregistre un Emploisdutemps
  public saveEmploisdutemps(
    emploisdutemps: Emploisdutemps,
  ): Observable<Emploisdutemps> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer l'Emploisdutemps
    return this.httpClient.post<Emploisdutemps>(
      environment.backendHost + 'emploisdutemps/Save',
      emploisdutemps,
      { headers },
    )
  }
}
