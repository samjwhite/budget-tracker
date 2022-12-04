import { Component, OnInit,Input } from '@angular/core';
import { IEntry } from '../entry.interface';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})
export class EntriesListComponent implements OnInit {
  @Input() entries:any;

  constructor() { }

  ngOnInit() { 
    console.log(this.entries)
  }

}
