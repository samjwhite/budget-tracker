import { Component, OnInit } from '@angular/core';
import { ICategory } from '../category.interface';

@Component({
  selector: 'app-entry-input',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.css']
})
export class EntryInputComponent implements OnInit {
  categories: ICategory[] = [{id:1, name:'food'}, {id:2, name:'utilities'}]
  categoryInput:any;
  categoriesFound:any[] = [];
  value:any = 0 || '';

  constructor() { }

  ngOnInit() {
  }

  onCategoryInput(){
    this.categoriesFound = this.categories.filter(i => i.name?.toLowerCase().includes(this.categoryInput.toLowerCase())).sort();
    console.log(this.categoriesFound)
  }

  submitEntry(){
    console.log(this.value);
  }
}
