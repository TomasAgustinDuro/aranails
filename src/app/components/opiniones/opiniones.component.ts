import { Component, OnInit } from '@angular/core';
import { GuardarDatosService } from '../../services/guardarDatosService/guardar-datos.service';
import { ObtenerDatosServiceService } from '../../services/obtenerDatosService/obtener-datos-service.service';
import { DocumentData } from 'firebase/firestore';
import { DatabaseService } from '../../services/conexionService/conexion-service.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.scss'],
})
export class opinionesComponent implements OnInit {
  nombre: string = '';
  textArea: string = '';
  opinionesRealizadas: DocumentData[] = [];
  mostrarModalOpinion: boolean = false;

  constructor(
    private guardarDatos: GuardarDatosService,
    private obtenerDatos: ObtenerDatosServiceService
  ) {}

  ngOnInit(): void {
    this.obtenerOpiniones();
  }

  async obtenerOpiniones() {
    try {
      const data = await this.obtenerDatos.obtenerDatos('opiniones');
      this.opinionesRealizadas = data;
    } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error);
    }
  }

  async guardarOpiniones() {
    const opiniones = {
      nombre: this.nombre,
      texto: this.textArea,
    };

    try {
      console.log('Datos de la base de datos:');
      await this.guardarDatos.guardarDatos('opiniones', opiniones);
      this.mostrarModalOpinion = true;

      this.nombre = '';
      this.textArea = '';
      setTimeout(() => {
        location.reload();
      }, 3000);
    } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error);
    }
  }
}
