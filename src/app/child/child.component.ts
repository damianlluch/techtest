import { Component, OnInit , Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  accounts: string[];

  @Input() childData: Array<any>;
  @Output() messageEvent = new EventEmitter<number>();


  constructor() {}

  ngOnInit(): void {


    this.accounts = this.childData.map((elemento)=>{
        return elemento.account.displayName;
    })

  }


  onChange(indice: number) {
    console.log(indice);
    this.messageEvent.emit(indice);
  }
}
