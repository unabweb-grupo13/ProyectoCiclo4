import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclo4UnabHotel';
  constructor(){
    this.set("isAuth",true);
    this.set("isAdmin",false);
    //setLocalStorage("isAuth", false);
  }
  set(key: string, data:any){
    try {
      localStorage.setItem(key,JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
  get(key: string){
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      console.log(e)
    }
  }
  
}
