import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CATEGORIES } from 'src/app/models/category/categories';
import { ICategory } from 'src/app/models/category/category.interface';
import { CategoryService } from 'src/app/models/category/category.service';
import { Category } from '../../models/category/category';

@Component({
  selector: 'app-entry-input',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.scss']
})
export class EntryInputComponent implements OnInit {
 
  categories: Category[]= [];
  categoryInput:any;
  categoriesFound:any[] = [];
  selectedCategory:any;
  value:any = 0 || '';
  selectedMonth:any;

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() dateSelected: EventEmitter<any> = new EventEmitter();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  monthSelectedHandler(month:string) {
    this.selectedMonth = month;
    this.dateSelected.emit(this.selectedMonth);
  }

  onCategoryInput(){
    this.categoriesFound = this.categories.filter(i => i.name?.toLowerCase().includes(this.categoryInput.toLowerCase())).sort();
  }

  onCategoryInputFocus(){
    this.categoriesFound = this.categories;
    console.log(this.categoriesFound)
  }

  selectCategory(category: ICategory){
    this.categoryInput = category.name;
    this.selectedCategory = category;
    this.categoriesFound = [];
  }

  onSubmit(){
    console.log("entry input submit clicked");
    if(!this.selectedMonth){
      return;
    }
    let id = this.generateId();
    let entry = {id:id, value:this.value, dateCreated:new Date(Date.now())};
    this.selectedCategory.entries.push(entry)
    ///this.submit.emit(this.selectedCategory)
  }

  generateId():string{
    let chars = ["a", "b", "c", "d", "e", "f"]
    return Date.now() + chars[Math.floor(Math.random()*chars.length)];
  }
}
