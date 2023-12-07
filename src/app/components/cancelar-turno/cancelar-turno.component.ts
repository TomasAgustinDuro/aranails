import { Component, OnInit } from '@angular/core';
import { ObtenerDatosServiceService } from '../../services/obtenerDatosService/obtener-datos-service.service';
import { DocumentData } from 'firebase/firestore';
import { EliminarTurnoService } from '../../services/eliminarTurnoService/eliminar-turno-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cancelar-turno',
  templateUrl: './cancelar-turno.component.html',
  styleUrls: ['./cancelar-turno.component.scss'],
})
export class CancelarTurnoComponent {
  nombre = '';
  coincidencia: any[] = [];
  turnosObtenidos: any[] = [];
  mostrarModalCancelar = false;
  mostrarModalCancelado = false;
  index = 0;

  constructor(
    private obtenerDatos: ObtenerDatosServiceService,
    private elim: EliminarTurnoService,
    private location: Location
  ) {}

  async buscarTurno() {
    this.mostrarModalCancelar = false;

    this.turnosObtenidos = await this.obtenerDatos.obtenerDatos('turnos');
    this.coincidencia = this.turnosObtenidos.filter((item: DocumentData) =>
      this.coincidenciaNombre(item['nombre'])
    );

    if (this.coincidencia.length === 0) {
      this.mostrarModalCancelar = true;
    }
  }

  coincidenciaNombre(nom: string) {
    return nom === this.nombre;
  }

  btnSiApretado() {
    if (this.coincidencia && this.coincidencia.length > this.index) {
      const diaUsuario = this.coincidencia[this.index]['dia'];
      const horaUsuario = this.coincidencia[this.index]['hora'];
      this.elim.eliminarTurnoPorDiaYHora(diaUsuario, horaUsuario);
    }
    this.cerrarModal();

    this.mostrarModalCancelado = true;

    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  btnNoApretado() {
    this.cerrarModal();
  }

  eliminarTurno(i: number) {
    this.index = i;
    this.abrirModal();
  }

  abrirModal() {
    const modal = document.getElementById('miModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  cerrarModal() {
    const modal = document.getElementById('miModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}

window.addEventListener('click', (event) => {
  const modal = document.getElementById('miModal');
  if (modal && event.target === modal) {
    modal.style.display = 'none';
  }
});
