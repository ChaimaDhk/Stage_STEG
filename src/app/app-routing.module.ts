import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AdminComponent } from './components/admin/admin.component';
import { AfficherJournalisteComponent } from './components/afficher-journaliste/afficher-journaliste.component';
import { AfficherMediaComponent } from './components/afficher-media/afficher-media.component';
import { AfficherRetombeComponent } from './components/afficher-retombe/afficher-retombe.component';
import { AjouterAdminComponent } from './components/ajouter-admin/ajouter-admin.component';
import { AjouterJournalisteComponent } from './components/ajouter-journaliste/ajouter-journaliste.component';
import { AjouterMediaComponent } from './components/ajouter-media/ajouter-media.component';
import { AjouterRetombeeComponent } from './components/ajouter-retombee/ajouter-retombee.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ImprimerMediaComponent } from './components/imprimer-media/imprimer-media.component';
import { ImprimerComponent } from './components/imprimer/imprimer.component';
import { JournalisteComponent } from './components/journaliste/journaliste.component';
import { MediaComponent } from './components/media/media.component';
import { ProfilComponent } from './components/profil/profil.component';
import { PwdChangeComponent } from './components/pwd-change/pwd-change.component';
import { RetombeComponent } from './components/retombe/retombe.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { VerifierComponent } from './components/verifier/verifier.component';


const routes: Routes = 
[{path:"",component:ConnexionComponent},
{path:"verifie",component:VerifierComponent},
{path:"password",component:PwdChangeComponent},
{path:"journaliste",component:JournalisteComponent},
{path:"signUp",component:SignUpComponent},
{path:"imprimer/:id",component:ImprimerComponent},
{path:"imprimerMedia/:id",component:ImprimerMediaComponent},
{ path: 'editJournaliste/:id', component:AjouterJournalisteComponent },
{ path: 'editRetombe/:id', component:AjouterRetombeeComponent },
{ path: 'editMedia/:id', component:AjouterMediaComponent },
{path:"afficher/:id",component:AfficherJournalisteComponent},
{path:"afficherRetombe/:id",component:AfficherRetombeComponent},
{path:"afficherMedia/:id",component:AfficherMediaComponent},
{path:"media",component:MediaComponent},
{path:"retombee",component:RetombeComponent},
{path:"ajouter",component:AjouterJournalisteComponent},
{path:"ajouterMedia",component:AjouterMediaComponent},
{path:"utilisateurs",component:UtilisateurComponent},
{path:"ajouterRetombee",component:AjouterRetombeeComponent},
{path:"acceuil",component:AcceuilComponent},
{path:"Admin",component:AdminComponent},
{path:"ajouterAdmin",component:AjouterAdminComponent},
{path:"profil/:id",component:ProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
