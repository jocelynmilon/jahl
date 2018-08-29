import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LocationComponent } from './location/location.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { ActiviteComponent } from './activite/activite.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'accueil', component: AccueilComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'location', component: LocationComponent },
    { path: 'conciergerie', component: ConciergerieComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'activite', component: ActiviteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
