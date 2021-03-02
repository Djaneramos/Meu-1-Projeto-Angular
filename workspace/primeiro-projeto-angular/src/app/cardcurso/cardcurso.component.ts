import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardcurso',
  templateUrl: './cardcurso.component.html',
  styleUrls: ['./cardcurso.component.css']
})
export class CardcursoComponent implements OnInit {
  curso1="Curso 1"
  hora1= "13:00"
  constructor() { }

  ngOnInit(): void {
  }

}
