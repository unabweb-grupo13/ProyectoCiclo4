import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciogeneralService {

  URL_viaje='http://localhost/ciclog29unab/API/crud/Insertardatos.php';

  constructor(private http:HttpClient) { }

  InsertarDatos(usuario:Modulo){
  //comunicar con la base
  alert("Llego al servicio" + JSON.stringify(usuario));

  return this.http.post<Modulo>(this.URL_viaje,usuario);


  }


}
