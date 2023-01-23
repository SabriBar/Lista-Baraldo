import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  listaAlumnos: Array<Alumno> = [
    {
      nombre: 'Jerry',
      año: 2,
      aprobado: true
    },
    {
      nombre: 'George',
      año: 1,
      aprobado: false
    },
    {
      nombre: 'Elaine',
      año: 2,
      aprobado: true
    },
    {
      nombre: 'Larry',
      año: 3,
      aprobado: true
    },
    {
      nombre: 'Kramer',
      año: 1,
      aprobado: false
    },
    {
      nombre: 'Newman',
      año: 1,
      aprobado: false
    },
    {
      nombre: 'Susan',
      año: 3,
      aprobado: true
    },
    {
      nombre: 'Constanza',
      año: 3,
      aprobado: true
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
