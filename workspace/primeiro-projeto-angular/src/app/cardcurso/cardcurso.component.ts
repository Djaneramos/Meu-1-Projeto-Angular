import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cardcurso',
  templateUrl: './cardcurso.component.html',
  styleUrls: ['./cardcurso.component.css']
})
export class CardcursoComponent {
  @Input() curso
}
