import { Component, OnInit } from '@angular/core';
import { IEntry } from '../entry.interface';
import { IMonth } from '../month-selector/month-selector.component'

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.page.html',
  styleUrls: ['./create-entry.page.css']
})
export class CreateEntryPage implements OnInit {
  selectedMonth:any;
  entries:IEntry[] = [{id:1 , month:{id:1, name:'January'}, category:{id:1, name:'Food'}, value:100, dateCreated:Date.now()}] 
  constructor() { }

  ngOnInit() {

  }
  monthSelectedHandler(month:IMonth) {
    this.selectedMonth = month;
    console.log(this.selectedMonth);
  }
}
