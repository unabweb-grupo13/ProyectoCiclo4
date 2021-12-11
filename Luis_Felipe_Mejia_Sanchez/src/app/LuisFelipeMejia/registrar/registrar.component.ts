import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciogeneralService } from '../serviciogeneral.service';

declare var operacion: any;
declare var cedula_vali: any;
declare var retorno1: any;
declare var validar_nombre: any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  nombre = "Profe Johann";
  arra = ["johann", "leonardo"];
  operacion = 2;
  retorno1 = "";
  retorno_nombre = "";
  mensaje = ["","","","","",""];

  contrasena_valid=false; contrasena_confirm=false;

  datosformulario = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    contrasena: new FormControl(''),
    confirm_contrasena: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
 
  });
  validar_contrasena(){
    if(this.datosformulario.value.contrasena.length>10){
      this.contrasena_valid = true;
    }else {
      this.mensaje[4]="Debe contener al menos 10 caracteres";
      this.contrasena_valid = false;
    }
  }
  validar_confirm_contrasena(){
    if (this.datosformulario.value.contrasena == this.datosformulario.value.confirm_contrasena){
      this.contrasena_confirm = true;
    }else{
      this.contrasena_confirm = false;
      this.mensaje[5]="La contraseña no coincide"
    }
  }

 
  recibir_datos() {

    let fname=this.datosformulario.value.fname;
    let lname=this.datosformulario.value.lname;
    let contrasena=this.datosformulario.value.contrasena;
    let email=this.datosformulario.value.email;
    let phone=this.datosformulario.value.phone;
   
    this.APIService.InsertarDatos(this.datosformulario.value).subscribe(data => {alert("Se agrego con exito");});           

  }
  constructor(private APIService:ServiciogeneralService) { }

  ngOnInit(): void {
  }

}
