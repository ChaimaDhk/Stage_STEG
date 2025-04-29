import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { JournalisteComponent } from './components/journaliste/journaliste.component';
import { MediaComponent } from './components/media/media.component';
import { RetombeComponent } from './components/retombe/retombe.component';
import { AjouterJournalisteComponent } from './components/ajouter-journaliste/ajouter-journaliste.component';
import { AjouterMediaComponent } from './components/ajouter-media/ajouter-media.component';
import { AjouterRetombeeComponent } from './components/ajouter-retombee/ajouter-retombee.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { NavSideComponent } from './components/nav-side/nav-side.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AfficherJournalisteComponent } from './components/afficher-journaliste/afficher-journaliste.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifierComponent } from './components/verifier/verifier.component';
import { ImprimerComponent } from './components/imprimer/imprimer.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AdminComponent } from './components/admin/admin.component';
import { AjouterAdminComponent } from './components/ajouter-admin/ajouter-admin.component';
import { ProfilComponent } from './components/profil/profil.component';
import { PwdChangeComponent } from './components/pwd-change/pwd-change.component';
import { AfficherRetombeComponent } from './components/afficher-retombe/afficher-retombe.component';
import { AfficherMediaComponent } from './components/afficher-media/afficher-media.component';
import { ImprimerMediaComponent } from './components/imprimer-media/imprimer-media.component';
@NgModule({
  declarations: [
    AppComponent,
  
    NavComponent,
    AcceuilComponent,
    JournalisteComponent,
    MediaComponent,
    RetombeComponent,
    AjouterJournalisteComponent,
    AjouterMediaComponent,
    AjouterRetombeeComponent,
    ConnexionComponent,
    NavSideComponent,
    AfficherJournalisteComponent,
    SignUpComponent,
    VerifierComponent,
    ImprimerComponent,
    UtilisateurComponent,
    AdminComponent,
    AjouterAdminComponent,
    ProfilComponent,
    PwdChangeComponent,
    AfficherRetombeComponent,
    AfficherMediaComponent,
    ImprimerMediaComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
