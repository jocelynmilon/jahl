import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router  } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CardComponent } from './card/card.component';
import { PresentationComponent } from './presentation/presentation.component';
import { UsaComponent } from './usa/usa.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { ActiviteComponent } from './activite/activite.component';

const routes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'location', component: LocationComponent },
  {path: 'conciergerie', component: ConciergerieComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'activite', component: ActiviteComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    CarouselComponent,
    AccueilComponent,
    FormulaireComponent,
    CardComponent,
    PresentationComponent,
    UsaComponent,
    ContactComponent,
    FooterComponent,
    LocationComponent,
    ConciergerieComponent,
    ActiviteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
