import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class EliminarTurnoService {
  constructor(private firestore: AngularFirestore) {}

  eliminarTurnoPorDiaYHora(dia: string, hora: string) {
    this.firestore
      .collection('turnos', (ref) =>
        ref.where('dia', '==', dia).where('hora', '==', hora)
      )
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete(); // Elimina el documento
        });
      });
  }
}
