import { Component, OnInit } from '@angular/core';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { from, groupBy, mergeMap, toArray } from 'rxjs';
import {  CATEGORIES } from 'src/app/models/category/categories';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/models/category/category.service';
import { Entry } from 'src/app/models/entry/entry';
import { EntryService } from 'src/app/models/entry/entry.service';



@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.page.html',
  styleUrls: ['./create-entry.page.css']
})



export class CreateEntryPage implements OnInit {

  entries: Entry[] = [];
  categories: Category[] = [];
  entriesGrouped: any;

  constructor(private entryService: EntryService, private categoryService: CategoryService) {}

  ngOnInit():void {
    this.getEntries();
    this.getCategories();
  }


  getEntries(): void{
    this.entryService.getEntries()
    .subscribe(entries => this.entries = entries);
  }
  getCategories(): void{
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  onDateSelected(month: any) {
    //find entries with this date
   let toDateEntries:Entry[] = this.entries.filter(i => i.dateCreated.toLocaleString('default', {month: 'long'}) === month.name)


   let entriesByCategory = new Array;
   if(toDateEntries){
    //group entries by category 
    for(let category of this.categories){
      let sumValue = 0;
     let categoryArray = toDateEntries.filter(i => i.categoryId == category.id);
      //sum all entries in each category
     for (let entry of categoryArray){
        sumValue+=entry.value;    
     }
     console.log(categoryArray)
    entriesByCategory.push({id:category.id, entries:categoryArray, sumValue:sumValue});
    }
   }
   console.log("entriesbycat", entriesByCategory);
   this.entriesGrouped = entriesByCategory;
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
