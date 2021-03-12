import { Component, Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-cadastrarcurso',
  templateUrl: './cadastrarcurso.component.html',
  styleUrls: ['./cadastrarcurso.component.css']
})
export class CadastrarcursoComponent {
@Output() onClickCadastrarCurso = new EventEmitter();
AddCurso(nome,cargahoraria){
  const curso = {
    nome,cargahoraria
  }
  this.onClickCadastrarCurso.emit(curso)
}
}
