import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarReservasComponent } from './santiago/registrar-reservas/registrar-reservas.component';
import { EditarReservasComponent } from './santiago/editar-reservas/editar-reservas.component';
import { ElegirHabitacionComponent } from './santiago/elegir-habitacion/elegir-habitacion.component';
import { TusReservasComponent } from './santiago/tus-reservas/tus-reservas.component';

const routes: Routes = [
  {path: '', component:RegistrarReservasComponent},
  {path: 'registrar_reservas', component:RegistrarReservasComponent },
  {path: 'elegir_habitacion', component:ElegirHabitacionComponent },
  {path: 'editar_reservas', component:EditarReservasComponent },
  {path: 'tus_reservas', component:TusReservasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
