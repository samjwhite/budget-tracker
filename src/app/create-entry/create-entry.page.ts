import { Component, OnInit } from '@angular/core';
import { IEntry } from '../entry.interface';


@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.page.html',
  styleUrls: ['./create-entry.page.css']
})
export class CreateEntryPage implements OnInit {
  entries:IEntry[] = [{id:1 , month:{id:1, name:'January'}, category:{id:1, name:'Food'}, value:100, dateCreated:Date.now()},{id:1 , month:{id:1, name:'January'}, category:{id:1, name:'Food'}, value:100, dateCreated:Date.now()}] 
  constructor() { }

  ngOnInit() {
    //todo get categories from db
  }

onSubmit(entry:IEntry) {
  this.entries.push(entry);
  console.log(entry);
}
}
