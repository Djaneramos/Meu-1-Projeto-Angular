import { Component } from '@angular/core';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent {
listacursos = [
  {nome:"English Kids",
  cargahoraria:"300Hs"
  },{
    nome:"English Kids One",
    cargahoraria:"200Hs"
  }
]
  AddCurso(curso){
    this.listacursos.push(curso)
  }
}
