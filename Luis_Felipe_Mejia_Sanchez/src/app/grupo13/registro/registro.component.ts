import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ServiciogeneralService} from '../serviciogeneral.service';
declare var operacion:any;
declare var cedula_vali:any;
declare var retorno1:any;
declare var validar_nombre:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

 //atributos
 nombre ="Profe Johann";
 arra=["johann","leonardo"];
 operacion = 2;
 retorno1="";
 retorno_nombre="";

 datosformulario =new FormGroup({
  sexo_usuario: new FormControl(''),
  cedula: new FormControl(''),
  nombre: new FormControl(''),
  username: new FormControl(''),
  email: new FormControl(''),
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
  
    let sexo_usuario=this.datosformulario.value.sexo_usuario;
    let cedula=this.datosformulario.value.cedula;
    let nombre=this.datosformulario.value.nombre;
    let username=this.datosformulario.value.username;
    let email=this.datosformulario.value.email;
    let contrasena=this.datosformulario.value.contrasena;
    
    this.APIService.InsertarDatos(this.datosformulario.value).subscribe(data => {alert("Se agrego con exito");});           




  /*
  let cedula=this.datosformulario.value.cedula;
  let retorno_valido = cedula_vali(cedula);
  this.retorno1=retorno_valido;
  
   
  let nombre_retorno_valido=this.datosformulario.value.nombre;
  let nombre_retorno_valido1= validar_nombre(nombre_retorno_valido);
  this.retorno_nombre=nombre_retorno_valido1;*/
  }  

  constructor(private APIService:ServiciogeneralService) { }

  ngOnInit(): void {
  }

}
