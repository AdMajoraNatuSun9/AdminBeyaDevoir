import { Cours } from "./cours"
import { Jours } from "./jours"
import { Matiere } from "./matiere"
import { Salle } from "./salle"

export class Emploisdutemps {
  id!: number
  heureDebut!: any
  heureFin!: any
  salle:Salle=new Salle()
  cours:Cours=new Cours()
  jours:Jours=new Jours()
  matiere:Matiere=new Matiere()
  
}
