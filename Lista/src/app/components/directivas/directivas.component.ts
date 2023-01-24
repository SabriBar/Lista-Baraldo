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
      ingresante: false,
      aprobado: true
    },
    {
      nombre: 'George',
      ingresante: true,
      aprobado: false
    },
    {
      nombre: 'Elaine',
      ingresante: false,
      aprobado: true
    },
    {
      nombre: 'Larry',
      ingresante: false,
      aprobado: true
    },
    {
      nombre: 'Kramer',
      ingresante: true,
      aprobado: false
    },
    {
      nombre: 'Newman',
      ingresante: true,
      aprobado: false
    },
    {
      nombre: 'Susan',
      ingresante: false,
      aprobado: true
    },
    {
      nombre: 'Morty',
      ingresante: true,
      aprobado: true
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
