import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var operacion:any;
declare var cedula_vali:any;
declare var retorno1:any;
declare var retorno_nombre:any
declare var validar_nombre:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //atributos
 nombre ="Profe Johann";
 arra=["johann","leonardo"];
 operacion = 2;
 retorno1="";
 retorno_nombre="";

 datosformulario =new FormGroup({
    username: new FormControl(''),
    contrasena: new FormControl(''),
 });


 
//metodos
  suma1(){
  this.operacion = 5*5;  
  //alert(this.operacion);
  this.suma2();
  }

  suma2(){
    this.operacion = 10*10;  
  alert(this.operacion);
  }

  recibir_datos(){
  let username=this.datosformulario.value.username;
  let contrasena=this.datosformulario.value.contrasena;
  }
  constructor() { }

  ngOnInit(): void {
  }


//metodos  estaticos o dinamicos

}
