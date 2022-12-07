import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/models/category/categories';
import { Category } from '../../models/category/category';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.page.html',
  styleUrls: ['./create-entry.page.css']
})

export class CreateEntryPage implements OnInit {

  categories: Category[] = CATEGORIES;

  constructor() { }

  ngOnInit() {
    //todo get categories from db
  }

onSubmit(category: Category) {
 //this.categories.find(i => i.id === category.id)?.entries?.push(category?.entries[0])
  console.log("create entry onSubmit", category);
}
}
