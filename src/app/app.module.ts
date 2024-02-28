import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SubMainComponent } from './main/sub-main/sub-main.component';
import { HeaderComponent } from './main/sub-main/header/header.component';
import { FooterComponent } from './main/sub-main/footer/footer.component';
import { SideBarComponent } from './main/sub-main/side-bar/side-bar.component';
import { AnneescolaireComponent } from './anneescolaire/anneescolaire.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ClasseComponent } from './classe/classe.component';
import { CoursComponent } from './cours/cours.component';
import { EmploisdutempsComponent } from './emploisdutemps/emploisdutemps.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { RouterModule } from '@angular/router';
import { JoursComponent } from './jours/jours.component';
import { SalleComponent } from './salle/salle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubMainComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    AnneescolaireComponent,
    MatiereComponent,
    ClasseComponent,
    CoursComponent,
    EmploisdutempsComponent,
    EnseignantComponent,
    JoursComponent,
    SalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
