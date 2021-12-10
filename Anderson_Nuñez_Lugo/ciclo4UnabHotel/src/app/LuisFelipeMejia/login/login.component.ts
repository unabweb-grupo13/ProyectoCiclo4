import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datosformulario =new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  mensaje = ["Dato requerido","Dato requerido"];
  password_confirm = true;
  email_confirm = true;
  constructor() { }
  iniciar_sesion(){
    let email=this.datosformulario.value.email;
    let password=this.datosformulario.value.password;
    if (email.length==0){
      this.email_confirm = false;
    }else{
      this.email_confirm = true;
    }
    if (password.length==0){
      this.password_confirm = false;
    }else{
      this.password_confirm = true;
    }
    if (!email.includes("@")){
      this.email_confirm = false;
      this.mensaje[0] = "El dato ingresado no corresponde a un E-mail";
    }
    
  }
  ngOnInit(): void {
  }

}
