import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatiereComponent } from './matiere/matiere.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EmploisdutempsComponent } from './emploisdutemps/emploisdutemps.component';
import { CoursComponent } from './cours/cours.component';
import { ClasseComponent } from './classe/classe.component';
import { AnneescolaireComponent } from './anneescolaire/anneescolaire.component';
import { JoursComponent } from './jours/jours.component';
import { SalleComponent } from './salle/salle.component';

const routes: Routes = [
  {path:"matiere", component:MatiereComponent},
  {path:"enseignant", component:EnseignantComponent},
  {path:"emploisdutemps", component:EmploisdutempsComponent},
  {path:"cours", component:CoursComponent},
  {path:"classe", component:ClasseComponent},
  {path:"anneescolaire", component:AnneescolaireComponent},
  {path:"jours", component:JoursComponent},
  {path:"salle", component:SalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
