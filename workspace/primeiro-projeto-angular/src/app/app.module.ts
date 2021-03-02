import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { CardcursoComponent } from './cardcurso/cardcurso.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    CardcursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
