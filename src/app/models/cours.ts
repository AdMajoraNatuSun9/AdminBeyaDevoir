import { Anneescolaire } from "./anneescolaire"
import { Classe } from "./classe"
import { Enseignant } from "./enseignant"
import { Matiere } from "./matiere"

export class Cours {
  id!: number
  enseignant:Enseignant=new Enseignant()
  matiere:Matiere=new Matiere()
  classe:Classe=new Classe()
  anneescolaire:Anneescolaire=new Anneescolaire()
}
