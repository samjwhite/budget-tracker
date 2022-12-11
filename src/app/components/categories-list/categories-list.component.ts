import { Component, OnInit,Input } from '@angular/core';
import { Entry } from 'src/app/models/entry/entry';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EntryService } from 'src/app/models/entry/entry.service';
import { CategoryService } from 'src/app/models/category/category.service';
import { Category } from 'src/app/models/category/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() items = new Array;
  @Input() date: Date = new Date();
  categories:Category[]=[];

  constructor( private categoryService:CategoryService) { }

  ngOnInit():void { 
    this.getCategories();
  }

  getCategoryName(id:any){
    if(!this.categories)return;
    if(!id) return;
    return this.categories.find(i => i.id == id)?.name || "undefined";
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  getSumByCategory(name: any){
return;
  }
}
