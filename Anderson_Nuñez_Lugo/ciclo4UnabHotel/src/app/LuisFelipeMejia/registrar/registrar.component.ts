import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  password_valid=false; password_confirm=false;

  datosformulario = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    /*
    sexo_usuario: new FormControl(''),
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    */
  });
  validar_password(){
    if(this.datosformulario.value.password.length>10){
      this.password_valid = true;
    }else {
      this.mensaje[4]="Debe contener al menos 10 caracteres";
      this.password_valid = false;
    }
  }
  validar_confirm_password(){
    if (this.datosformulario.value.password == this.datosformulario.value.confirm_password){
      this.password_confirm = true;
    }else{
      this.password_confirm = false;
      this.mensaje[5]="La contraseña no coincide"
    }
  }

  recibir_datos() {

    let password = this.datosformulario.value.password;
    alert(password);
    let confirm_password = this.datosformulario.value.confirm_password;
    alert(confirm_password);
    //let retorno_valido = cedula_vali(cedula);
    //this.retorno1 = retorno_valido;


    //let nombre_retorno_valido = this.datosformulario.value.nombre;
    //let nombre_retorno_valido1 = validar_nombre(nombre_retorno_valido);
    //this.retorno_nombre = nombre_retorno_valido1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
