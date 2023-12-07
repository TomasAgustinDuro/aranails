import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { opinionesComponent } from './components/opiniones/opiniones.component';
import { CancelarTurnoComponent } from './components/cancelar-turno/cancelar-turno.component';
import { TecnicasComponent } from './components/tecnicas/tecnicas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'turnos', component: TurnosComponent },
  { path: 'opiniones', component: opinionesComponent },
  { path: 'cancelar', component: CancelarTurnoComponent },
  { path: 'servicios', component: TecnicasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
