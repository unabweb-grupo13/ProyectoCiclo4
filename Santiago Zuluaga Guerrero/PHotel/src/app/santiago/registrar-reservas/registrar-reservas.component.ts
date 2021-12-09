import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';

declare var Nombre: any;
declare var Apellido: any;
declare var Id: any;
declare var Email: any;
declare var Celular: any;

@Component({
  selector: 'app-registrar-reservas',
  templateUrl: './registrar-reservas.component.html',
  styleUrls: ['./registrar-reservas.component.css']
})
export class RegistrarReservasComponent implements OnInit {


  week: any =[
      "LUNES",
      "MARTES",
      "MIERCOLES",
      "JUEVES",
      "VIERNES",
      "SABADO",
      "DOMINGO"

  ];

  monthSelect: any=[];
  dateSelect: any;
  
  
  

  constructor() { }

  ngOnInit(): void {
    this.getDaysFromDate(12, 2021)
  }
  // metodos estaticos
  getDaysFromDate(month: number, year: number){
    const startDay = moment.utc(`${year}/${month}/01`)
    const endDay  = startDay.clone().endOf('month')
    this.dateSelect = startDay;
    const diffDays = endDay.diff(startDay, 'days', true)
    const numberDays = Math.round(diffDays);
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any)=>{
      a = parseInt(a) + 1; 
      const dayObject = moment(`${year}-${month}-${a}`);
      return{
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });
    this.monthSelect = arrayDays;

    
  }

  changeMonth(flag: number){
    if(flag < 0 ){
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    }
    else{
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));

    }
  }
  clickDay(day: { value: any; }){
    const monthYear =this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
     const objectDate = moment(parse)
  }

  datosFormularioReservas = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    ID: new FormControl(''),
    email: new FormControl(''),
    celular: new FormControl('')
  });

  datos_reservas(){
    let nombre = this.datosFormularioReservas.value.nombre;
    
    let apellido = this.datosFormularioReservas.value.apellido;
    let ID = this.datosFormularioReservas.value.ID;
    let email = this.datosFormularioReservas.value.email;
    let celular = this.datosFormularioReservas.value.celular;
    Nombre(nombre);
    Apellido(apellido);
    Id(ID);
    Email(email);
    Celular(celular);
  }
}
