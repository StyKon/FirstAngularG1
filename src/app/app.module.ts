import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2Component } from './c2/c2.component';
import { C1Component } from './c2/c1/c1.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { PatientsComponent } from './patients/patients.component';
import { DiabeteComponent } from './medecins/diabete/diabete.component';

@NgModule({
  declarations: [
    AppComponent,
    C2Component,
    C1Component,
    MedecinsComponent,
    PatientsComponent,
    DiabeteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
