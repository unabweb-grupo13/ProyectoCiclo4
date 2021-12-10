import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarReservaComponent } from './grupo13/consultar-reserva/consultar-reserva.component';
import { MenuComponent } from './grupo13/menu/menu.component';
import { LoginComponent } from './grupo13/login/login.component';
import { RegistroComponent } from './grupo13/registro/registro.component';
import { ReservaComponent } from './grupo13/reserva/reserva.component';
import { ContactoComponent } from './grupo13/contacto/contacto.component';
import { HomeComponent } from './grupo13/home/home.component';
import { CheckingComponent} from './grupo13/checking/checking.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ConsultarReserva', component:  ConsultarReservaComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Registro', component: RegistroComponent},
  { path: 'Reserva', component: ReservaComponent},
  { path: 'Checking', component: CheckingComponent},
  { path: 'Contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
