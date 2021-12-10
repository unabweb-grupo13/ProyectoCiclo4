import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-habitacion',
  templateUrl: './crear-habitacion.component.html',
  styleUrls: ['./crear-habitacion.component.css']
})
export class CrearHabitacionComponent implements OnInit {
  mensaje=["","","",""];
  cod_hab_valid=false;
  precio_valid=false;
  min_huespedes_valid=false;
  max_huespedes_valid=false;
  datosformulario = new FormGroup({
    codigo: new FormControl(''),
    precio: new FormControl(''),
    min_huespedes: new FormControl(''),
    max_huespedes: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  validar_cod(){}
  validar_precio(){}
  validar_min_huespedes(){}
  validar_max_huespedes(){}
  recibir_datos(){}
}
