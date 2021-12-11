import { Injectable } from '@angular/core';
import { Modulologin } from './modulologin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciologinService {

  URL_viaje='http://localhost/ciclog29unab/API/crud/Login.php';

  constructor(private http:HttpClient) { }

  InsertarDatos(usuario:Modulologin){
  //comunicar con la base
  alert("Llego al servicio" + JSON.stringify(usuario));

  return this.http.post<Modulologin>(this.URL_viaje,usuario);
  }
   
}
