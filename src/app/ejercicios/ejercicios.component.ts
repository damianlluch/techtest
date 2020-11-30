import { TechtestService } from './../techtest.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {


  nombre; referencia; currency: string ;
  balance; message; toEurRate; balanceEur: number;
  data: Array<any>;

  constructor(private servicio: TechtestService ) {
      console.log(servicio.getData());
      this.message = 0;
      this.data = servicio.getData() ;
      this.balanceEur = this.data[this.message].totals[0].balance;
      this.balance = this.data[this.message].totals[1].balance ;
      this.toEurRate = this.data[this.message].totals[1].toEurRate ;
      this.currency = this.data[this.message].totals[0].currency ;
      this.nombre = this.data[this.message].account.displayName ;
      this.referencia = this.data[this.message].account.reference ;
  }


  receiveMessage($event:any) {
    this.message = $event;
    this.balanceEur = this.data[this.message].totals[0].balance;
    this.balance = this.data[this.message].totals[1].balance ;
    this.toEurRate = this.data[this.message].totals[1].toEurRate ;
    this.currency = this.data[this.message].totals[0].currency ;
    this.nombre = this.data[this.message].account.displayName ;
    this.referencia = this.data[this.message].account.reference ;
  }

  ngOnInit(): void {}

}
