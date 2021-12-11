import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule }                 from './app-routing.module';
import { AppComponent }                     from './app.component';
import { HorizontalnavbarComponent }        from './AndersonLugo/horizontalnavbar/horizontalnavbar.component';
import { HomeComponent }                    from './AndersonLugo/home/home.component';
import { RegistrarComponent }               from './LuisFelipeMejia/registrar/registrar.component';
import { LoginComponent }                   from './LuisFelipeMejia/login/login.component';
import { HorizontalNavBarComponent }        from './DanielCardona/horizontal-nav-bar/horizontal-nav-bar.component';
import { FooterComponent }                  from './DanielCardona/footer/footer.component';
import { TusReservasComponent } from './SantiagoZuluaga/tus-reservas/tus-reservas.component';
import { RegistrarReservasComponent } from './SantiagoZuluaga/registrar-reservas/registrar-reservas.component';
import { ElegirHabitacionComponent } from './SantiagoZuluaga/elegir-habitacion/elegir-habitacion.component';
import { EditarReservasComponent } from './SantiagoZuluaga/editar-reservas/editar-reservas.component';
import { CrearHabitacionComponent } from './AndersonLugo/crear-habitacion/crear-habitacion.component';
import { ServiciogeneralService } from './LuisFelipeMejia/serviciogeneral.service';
import { ServiciologinService } from './LuisFelipeMejia/serviciologin.service';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalnavbarComponent,
    HomeComponent,
    RegistrarComponent,
    LoginComponent,
    HorizontalNavBarComponent,
    FooterComponent,
    TusReservasComponent,
    RegistrarReservasComponent,
    ElegirHabitacionComponent,
    EditarReservasComponent,
    CrearHabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ServiciogeneralService,
    ServiciologinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
