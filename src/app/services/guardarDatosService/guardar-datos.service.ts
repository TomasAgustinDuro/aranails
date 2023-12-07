import { Injectable } from '@angular/core';
import { DatabaseService } from '../conexionService/conexion-service.service';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class GuardarDatosService {
  constructor(private conexion: DatabaseService) {}

  async guardarDatos(coleccion: any, informacion: any) {
    try {
      const docRef = await addDoc(
        collection(this.conexion.db, coleccion),
        informacion
      );
    } catch (e) {
      console.error('Error al agregar el documento:', e);
    }
  }
}
