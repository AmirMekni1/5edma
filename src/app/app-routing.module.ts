import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FP5edmaComponent } from './fp5edma/fp5edma.component';
import { AccueilComponent } from './accueil/accueil.component';
import { OffreComponent } from './offre/offre.component';
import { DemandeComponent } from './demande/demande.component';
import { AjouterComponent } from './CRUD  Services/ajouter/ajouter.component';
import { ModifierComponent } from './CRUD  Services/modifier/modifier.component';
import { SupprimerComponent } from './CRUD  Services/supprimer/supprimer.component';
import { ParametreComponent } from './parametre/parametre.component';

const routes: Routes = [
  {path:"", component:AuthComponent},
  {path:"test", component:FP5edmaComponent},
  {path:"PageDaccueil", component:AccueilComponent},
  {path:"Offre", component:OffreComponent},
  {path:"Demande", component:DemandeComponent},
  {path:"Ajouter", component:AjouterComponent},
  {path:"Modifier", component:ModifierComponent},
  {path:"Supprimer", component:SupprimerComponent},
  {path:"Reglage", component:ParametreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
