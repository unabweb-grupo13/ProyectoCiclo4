import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './LuisFelipeMejia/registrar/registrar.component';
import { LoginComponent } from './LuisFelipeMejia/login/login.component';
import { EditarReservasComponent } from './SantiagoZuluaga/editar-reservas/editar-reservas.component';
import { ElegirHabitacionComponent } from './SantiagoZuluaga/elegir-habitacion/elegir-habitacion.component';
import { RegistrarReservasComponent } from './SantiagoZuluaga/registrar-reservas/registrar-reservas.component';
import { TusReservasComponent } from './SantiagoZuluaga/tus-reservas/tus-reservas.component';
import { CrearHabitacionComponent } from './AndersonLugo/crear-habitacion/crear-habitacion.component';

const routes: Routes = [
  {path: 'Registrar', component:RegistrarComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'EditarReservas', component:EditarReservasComponent},
  {path: 'ElegirHabitacion', component:ElegirHabitacionComponent},
  {path: 'RegistrarReservas', component:RegistrarReservasComponent},
  {path: 'TusReservas', component:TusReservasComponent},
  {path: 'administrar/CrearHabitacion', component:CrearHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
