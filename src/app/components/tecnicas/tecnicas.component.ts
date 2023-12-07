import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnicas',
  templateUrl: './tecnicas.component.html',
  styleUrls: ['./tecnicas.component.scss'],
})
export class TecnicasComponent {
  servicios = [
    {
      nombre: 'Kapping',
      img: 'kapping',
    },
    {
      nombre: 'Semi permanente',
      img: 'semi',
    },
    {
      nombre: 'Press on',
      img: 'presson',
    },
    {
      nombre: 'Pedicuria',
      img: 'pedicuria',
    },
    {
      nombre: 'Henna',
      img: 'henna',
    },
    {
      nombre: 'Perfilado',
      img: 'perfilado',
    },
    {
      nombre: 'Laminado de cejas',
      img: 'laminado',
    },
    {
      nombre: 'Lifting',
      img: 'lifting',
    },
    {
      nombre: 'Base rubber',
      img: 'baseRubber',
    },
  ];
}
