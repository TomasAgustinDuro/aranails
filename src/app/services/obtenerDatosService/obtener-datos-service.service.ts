import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import { DatabaseService } from '../../services/conexionService/conexion-service.service';

@Injectable({
  providedIn: 'root',
})
export class ObtenerDatosServiceService {
  constructor(private conexion: DatabaseService) {}

  async obtenerDatos(coleccion: string) {
    try {
      const querySnapshot = await getDocs(
        collection(this.conexion.db, coleccion)
      );
      return querySnapshot.docs.map((doc) => doc.data());
    } catch (e) {
      console.error('Error al obtener datos:', e);
      return [];
    }
  }
}
