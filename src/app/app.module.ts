import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2Component } from './Views/c2/c2.component';
import { C1Component } from './Views/C2/c1/c1.component';

@NgModule({
  declarations: [
    AppComponent,
    C2Component,
    C1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
