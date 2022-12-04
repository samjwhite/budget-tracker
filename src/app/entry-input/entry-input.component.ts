import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../category.interface';
import { IMonth } from '../month-selector/month-selector.component'

@Component({
  selector: 'app-entry-input',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.scss']
})
export class EntryInputComponent implements OnInit {


  categories: ICategory[] = [{id:1, name:'🥗 food'}, {id:2, name:'⚡utilities'}]
  categoryInput:any;
  categoriesFound:any[] = [];
  selectedCategory:any;
  value:any = 0 || '';
  selectedMonth:any;

  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  monthSelectedHandler(month:IMonth) {
    this.selectedMonth = month;
    console.log(this.selectedMonth);
  }

  onCategoryInput(){
    this.categoriesFound = this.categories.filter(i => i.name?.toLowerCase().includes(this.categoryInput.toLowerCase())).sort();
  }

  onCategoryInputFocus(){
    this.categoriesFound = this.categories;
  }

  selectCategory(category: ICategory){
    this.categoryInput = category.name;
    this.selectedCategory = category;
    this.categoriesFound = [];
  }

  onSubmit(){
    if(!this.selectedMonth){
      return;
    }
    let id = this.generateId();
    let entry = {id:id, month:this.selectedMonth, category:this.selectedCategory, value:this.value,dateCreated: Date.now()};
    this.submit.emit(entry)
  }

  generateId():string{
    let chars = ["a", "b", "c", "d", "e", "f"]
    return Date.now() + chars[Math.floor(Math.random()*chars.length)];
  }
}
