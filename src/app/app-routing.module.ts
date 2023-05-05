import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FP5edmaComponent } from './fp5edma/fp5edma.component';

const routes: Routes = [
  {path:"", component:AuthComponent},
  {path:"test", component:FP5edmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
