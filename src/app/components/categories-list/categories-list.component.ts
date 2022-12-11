import { Component, OnInit,Input } from '@angular/core';
import { Entry } from 'src/app/models/entry/entry';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EntryService } from 'src/app/models/entry/entry.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() entries:Entry[] = [];
  @Input() date: Date = new Date();
  entriesByCategory:Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit():void { 
    this.getEntries();
    this.getCategories();
  }

   getEntries() {
    this.entryService.getEntries()
    .subscribe(entries => this.entries = entries);
  }

  getCategories(){
//emit each entry
const source = from(this.entries);
//group by category
source.pipe(
  groupBy(entry => entry.category.name),
  // return each item in group as array
  mergeMap(group => group.pipe(toArray()))
).subscribe((data)=> this.entriesByCategory = data);
  }

  getSumByCategory(name: any){
return;
  }
}
