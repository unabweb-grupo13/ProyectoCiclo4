import { Component, OnInit } from '@angular/core';
declare var getLocalStorage:any;
declare var setLocalStorage:any;
declare var alertar:any;

@Component({
  selector: 'app-horizontal-nav-bar',
  templateUrl: './horizontal-nav-bar.component.html',
  styleUrls: ['./horizontal-nav-bar.component.css']
})
export class HorizontalNavBarComponent implements OnInit {

  constructor() { }
  //isAuth = getLocalStore("isAuth");
  /*
  isAuth = this.get("isAuth");
  isAdmin = this.get("isAdmin");
  */
  isAuth = getLocalStorage("isAuth");
  isAdmin = getLocalStorage("isAdmin");
  
  ngOnInit(): void {
  }

  cerrar_sesion(){
    /*this.set("isAuth",false);
    this.isAuth = false;
    this.set("isAdmin",false);
    setLocalStorage("isAdmin",true)
    this.isAdmin = false;*/
    setLocalStorage("isAuth",false);
    this.isAuth = false;
    setLocalStorage("isAdmin",false);
    this.isAdmin = false;
  }
}
