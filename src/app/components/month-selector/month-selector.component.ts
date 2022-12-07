import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMonth } from '../../models/month/month.interface';


export const MONTHS:IMonth[] = [ {id:1, name:"January"}, {id:2, name:"February"},{id:3, name:"March" }, {id:4, name:"April"},{id:5, name: "May"},{id:6, name:"June"},
{id:7, name:"July"}, {id:8, name:"August"}, {id:9, name:"September"}, {id:10, name:"October"}, {id:11, name:"November"}, {id:12, name:"December"} ];

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css']
})

export class MonthSelectorComponent implements OnInit {

  months:any[] = MONTHS;
  selectedMonth:any;
  @Output() select : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onSelected(month:IMonth){
    this.selectedMonth = this.months.find(i => i === month);
    this.select.emit(this.selectedMonth);
  }
}
