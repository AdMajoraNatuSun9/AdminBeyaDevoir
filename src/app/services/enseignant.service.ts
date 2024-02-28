import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Enseignant } from '../models/enseignant'

@Injectable({
  providedIn: 'root',
})
export class EnseignantService {
  constructor(private httpClient: HttpClient) {}

  // Cette fonction récupère tous les Enseignants depuis le backend
  public getAllEnseignant(): Observable<Enseignant[]> {
    return this.httpClient.get<Enseignant[]>(
      environment.backendHost + 'enseignant/All',
    )
  }

  // Cette fonction supprime un Enseignant spécifique en utilisant son ID
  public deleteEnseignant(ID: number): Observable<any> {
    return this.httpClient.delete(
      environment.backendHost + 'enseignant/Delete/' + ID,
    )
  }

  // Cette fonction récupère un Enseignant spécifique en utilisant son ID
  public getEnseignant(ID: number): Observable<Enseignant> {
    return this.httpClient.get<Enseignant>(
      environment.backendHost + 'enseignant/Get/' + ID,
    )
  }

  // Cette fonction enregistre un nouveau Enseignant
  public saveEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer l'Enseignant
    return this.httpClient.post<Enseignant>(
      environment.backendHost + 'enseignant/Save',
      enseignant,
      { headers },
    )
  }
}
