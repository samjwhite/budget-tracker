import { ICategory } from "../category/category.interface";
import { IEntry } from "../entry/entry.interface";

export class Entry implements IEntry {
id:number;
value:number;
dateCreated:Date;
category:ICategory;

 constructor(id:number, value:number, dateCreated:Date, category:ICategory) {
    this.id = id;
    this.value = value;
    this.dateCreated = dateCreated;
    this.category = category;
 };

//  getValuesSum(){
//     let values:number[] = [];
//     if(this.entries){
//     for(let entry of this.entries)
//     {
//         if(!entry.value) continue; 
//       values.push(+entry.value);       
//     }
//    return +values.reduce((a, b) => a + b, 0) 
//   }
//   return;
//  }
}
