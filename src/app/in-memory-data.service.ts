import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './models/category/category';
import { Entry } from './models/entry/entry';
import { IEntry } from './models/entry/entry.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

   
    const categories : Category[] = [
      new Category(1, "🥗 Food","expense"),
      new Category(2, "⚡ Utilities","expense"),
      new Category(3, "💵 Salary","income"),
    ]

    const entries:IEntry[] = [
      new Entry(1,100, new Date(Date.now()),categories[0]),
      new Entry(2,100, new Date(Date.now()),categories[1]),
      new Entry(3,100, new Date(Date.now()),categories[2]),
      new Entry(4,100, new Date(Date.now()),categories[2]),
      new Entry(5,100, new Date(Date.now()),categories[1]),
      new Entry(6,100, new Date(Date.now()),categories[0]),
    ];

    return {categories:categories,entries:entries};
  }

  genId(entries: Entry[]): number {
    return entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 11;
  }
}