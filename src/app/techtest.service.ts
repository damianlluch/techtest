import { Injectable } from '@angular/core';
//import * as data from './data.json';
import data from './data.json';



@Injectable({
  providedIn: 'root'
})
export class TechtestService {

  constructor() { }

  getData(): Array<any>{
    return data;
  }
}
