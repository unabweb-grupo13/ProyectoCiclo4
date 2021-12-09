import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarReservasComponent } from './santiago/registrar-reservas/registrar-reservas.component';
import { ElegirHabitacionComponent } from './santiago/elegir-habitacion/elegir-habitacion.component';
import { TusReservasComponent } from './santiago/tus-reservas/tus-reservas.component';
import { EditarReservasComponent } from './santiago/editar-reservas/editar-reservas.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarReservasComponent,
    ElegirHabitacionComponent,
    TusReservasComponent,
    EditarReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
