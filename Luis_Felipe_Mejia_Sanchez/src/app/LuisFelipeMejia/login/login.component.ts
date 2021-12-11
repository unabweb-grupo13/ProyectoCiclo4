import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciologinService } from '../serviciologin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
datosformulario =new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
  });

  mensaje = ["Dato requerido","Dato requerido"];
  contrasena_confirm = true;
  email_confirm = true;

  iniciar_sesion(){
    let email=this.datosformulario.value.email;
    let contrasena=this.datosformulario.value.contrasena;
    if (email.length==0){
      this.email_confirm = false;
    }else{
      this.email_confirm = true;
    }
    if (contrasena.length==0){
      this.contrasena_confirm = false;
    }else{
      this.contrasena_confirm = true;
    }
    if (!email.includes("@")){
      this.email_confirm = false;
      this.mensaje[0] = "El dato ingresado no corresponde a un E-mail";
    }
    
  }

  recibir_datos() {

    let email=this.datosformulario.value.email;
    let contrasena=this.datosformulario.value.contrasena;
       
    this.APIService.InsertarDatos(this.datosformulario.value).subscribe(data => {alert("Se agrego con exito");});           

  }

  constructor(private APIService:ServiciologinService) { }

  ngOnInit(): void {
  }

}
