import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Jours } from '../models/jours';

@Injectable({
  providedIn: 'root'
})
export class JoursService {

  //constructor() { }
  constructor(private httpClient: HttpClient) {}

    public getAllJours(): Observable<Jours[]> {
    return this.httpClient.get<Jours[]>(
      environment.backendHost + 'jours/All',
    )
  }

  
  public deleteJours(ID: number) {
    return this.httpClient.delete(
      environment.backendHost + 'jours/Delete/' + ID,
    )
  }
  
  
// Cette fonction récupère 1 *** spécifique en utilisant son ID
  public getJours(ID: number): Observable<Jours> {
    return this.httpClient.get<Jours>(
      environment.backendHost + 'jours/Get/' + ID,
    )
  }


// Cette fonction enregistre une nouvelle ****
  public saveJours(jour: Jours): Observable<Jours> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer l'****
    return this.httpClient.post<Jours>(
      environment.backendHost + 'jours/Save',
      jour,
      { headers },
    )
  }

}

