import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinsComponent } from './medecins/medecins.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [

  { path:'medecins', component : MedecinsComponent },
  { path:'patients', component : PatientsComponent },
  {path:'' ,redirectTo: '/medecins' ,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
