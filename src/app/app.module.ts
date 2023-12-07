import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { opinionesComponent } from './components/opiniones/opiniones.component';
import { CancelarTurnoComponent } from './components/cancelar-turno/cancelar-turno.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TecnicasComponent } from './components/tecnicas/tecnicas.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { TurnosComponent } from './components/turnos/turnos.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { GuardarDatosService } from './services/guardarDatosService/guardar-datos.service';
import { DatabaseService } from './services/conexionService/conexion-service.service';
import { EliminarTurnoService } from './services/eliminarTurnoService/eliminar-turno-service.service';
import { ObtenerDatosServiceService } from './services/obtenerDatosService/obtener-datos-service.service';

const firebaseConfig = {
  apiKey: 'AIzaSyBKSaXGdgWFHLGonumNJLyhe8ixBAEP_-w',
  authDomain: 'aracelinails-5fe42.firebaseapp.com',
  projectId: 'aracelinails-5fe42',
  storageBucket: 'aracelinails-5fe42.appspot.com',
  messagingSenderId: '702459142011',
  appId: '1:702459142011:web:0f46b05872e82b987927de',
};

@NgModule({
  declarations: [
    AppComponent,
    opinionesComponent,
    CancelarTurnoComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    NavbarComponent,
    NosotrosComponent,
    TecnicasComponent,
    TrabajosComponent,
    TurnosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    GuardarDatosService,
    ObtenerDatosServiceService,
    DatabaseService,
    EliminarTurnoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
