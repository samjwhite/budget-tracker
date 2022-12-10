import {
  Component,
  OnInit
} from '@angular/core';
import {
  CATEGORIES
} from 'src/app/models/category/categories';
import {
  Category
} from '../../models/category/category';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.page.html',
  styleUrls: ['./create-entry.page.css']
})

export class CreateEntryPage implements OnInit {

  categories: Category[] = CATEGORIES;
  listItems: any[] = [];

  constructor() {}

  ngOnInit() {
    //todo get categories from db
  }

  onDateSelected(date: any) {
    let currentItems = [];
    for (let category of this.categories) {
      if (!category.entries) continue;
      let currentCategory:Category = category;
      currentCategory.entries = [];
      for (let entry of category.entries) {
        if (this.convertDateToLocaleString(entry.dateCreated)
        .includes(this.convertDateToLocaleString(date))) {
          currentCategory.entries.push(entry);
        }
      }
      if(currentCategory.entries.length > 0) {
        currentItems.push(currentCategory);
      }
    }
    this.listItems = currentItems;
  }

  convertDateToLocaleString(date: any) {
    const options: Intl.DateTimeFormatOptions = {
      month: "long"
    };
    console.log(date.toLocaleString("en-US", options))
    return date.toLocaleString("en-US", options);
  }

  onSubmit(category: Category) {
    //this.categories.find(i => i.id === category.id)?.entries?.push(category?.entries[0])
  }
}
