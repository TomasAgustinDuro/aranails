import { Component } from '@angular/core';
import { GuardarDatosService } from '../../services/guardarDatosService/guardar-datos.service';
import { ObtenerDatosServiceService } from '../../services/obtenerDatosService/obtener-datos-service.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss'],
})
export class TurnosComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  fecha: string = '';
  horario: string = '';

  mostrarModalCampo: boolean = false;
  mostrarModalTurno: boolean = false;
  mostrarModalTurnoConfirmado: boolean = false;

  constructor(
    private guardarDatos: GuardarDatosService,
    private obtener: ObtenerDatosServiceService
  ) {}

  async onSubmit(event: Event) {
    event.preventDefault();
    const data: { [key: string]: string } = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      dia: this.fecha,
      hora: this.horario,
      telefono: this.telefono,
    };

    const datosDB = await this.obtener.obtenerDatos('turnos');
    for (const dato in data) {
      console.log('Campo:', dato);
      if (data[dato] === '') {
        this.mostrarModalCampo = true;
        console.log('Rellene el campo ' + dato);
        return;
      }

      for (const datoDB of datosDB) {
        if (data['dia'] === datoDB['dia'] && data['hora'] === datoDB['hora']) {
          this.mostrarModalTurno = true;
          console.log('Ese turno está ocupado');
          return;
        }
      }
    }

    try {
      console.log('Datos de la base de datos:');
      console.log(datosDB);

      await this.guardarDatos.guardarDatos('turnos', data);
      this.mostrarModalTurnoConfirmado = true;
    } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error);
    }
  }
}
