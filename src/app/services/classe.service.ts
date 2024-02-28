import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Classe } from '../models/classe'

@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  constructor(private httpClient: HttpClient) {}

  // Cette fonction récupère toutes les Classes depuis le backend
  public getAllClasse(): Observable<Classe[]> {
    return this.httpClient.get<Classe[]>(environment.backendHost + 'classe/All')
  }

  // Cette fonction supprime une Classe spécifique en utilisant son ID
  public deleteClasse(ID: number): Observable<any> {
    return this.httpClient.delete(
      environment.backendHost + 'classe/Delete/' + ID,
    )
  }

  // Cette fonction récupère une Classe spécifique en utilisant son ID
  public getClasse(ID: number): Observable<Classe> {
    return this.httpClient.get<Classe>(
      environment.backendHost + 'classe/Get/' + ID,
    )
  }

  // Cette fonction enregistre une nouvelle Classe
  public saveClasse(classe: Classe): Observable<Classe> {
    // Définition des en-têtes HTTP pour spécifier le type de contenu
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    // Envoi de la requête POST pour enregistrer la Classe
    return this.httpClient.post<Classe>(
      environment.backendHost + 'classe/Save',
      classe,
      { headers },
    )
  }
}
