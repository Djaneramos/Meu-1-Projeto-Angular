import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { CardcursoComponent } from './cardcurso/cardcurso.component';
import { CadastrarcursoComponent } from './cadastrarcurso/cadastrarcurso.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    CardcursoComponent,
    CadastrarcursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
