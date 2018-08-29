import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgxPopper } from 'angular-popper';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LocationComponent } from './location/location.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { ActiviteComponent } from './activite/activite.component';
import { ContactComponent } from './contact/contact.component';

import { FormulaireComponent } from './formulaire/formulaire.component';
import { CardComponent } from './card/card.component';
import { PresentationComponent } from './presentation/presentation.component';
import { UsaComponent } from './usa/usa.component';

import { FooterComponent } from './footer/footer.component';


import { AlertComponent } from './_directives/alert.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routing';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_service';
const routes: Routes = [
 /* { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'location', component: LocationComponent },
  { path: 'conciergerie', component: ConciergerieComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'activite', component: ActiviteComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }*/

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
  ActiviteComponent,
 ConnexionComponent,
    AlertComponent,
    UtilisateurComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPopper,
    routing,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
