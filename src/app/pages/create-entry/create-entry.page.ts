import { Component, OnInit } from '@angular/core';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { from, groupBy, mergeMap, toArray } from 'rxjs';
import {  CATEGORIES } from 'src/app/models/category/categories';
import { Entry } from 'src/app/models/entry/entry';
import { EntryService } from 'src/app/models/entry/entry.service';



@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.page.html',
  styleUrls: ['./create-entry.page.css']
})



export class CreateEntryPage implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit():void {
    console.log('entries = ', this.getEntries());
  }


  getEntries(): void{
    this.entryService.getEntries()
    .subscribe(entries => this.entries = entries);
  }

  onDateSelected(month: any) {
   
    //find entries with this date
    //group entries by category 
    //sum all entries in each category
console.log("entries", this.entries)
console.log("month name: ", month.name)


  //todo convert date from ISO to Date
   let toDateEntries = this.entries.filter(i => i.dateCreated.toLocaleString('default', {month: 'long'}) === month.name)
   console.log("todateEntries", toDateEntries)
  let entriesByCategory;
   if(toDateEntries){
    const source = from(toDateEntries);
    source.pipe(
      groupBy(entry => entry.category.name),
      mergeMap(group => group.pipe(toArray()))
    ).subscribe((data)=> entriesByCategory = data);
    console.log("entriesbycat", entriesByCategory);
   }
  }


  

  convertDateToLocaleString(date: any) {
    const options: Intl.DateTimeFormatOptions = {
      month: "long"
    };
    console.log(date.toLocaleString("en-US", options))
    return date.toLocaleString("en-US", options);
  }

  onSubmit() {
    //this.categories.find(i => i.id === category.id)?.entries?.push(category?.entries[0])
  }
}
