import { Category } from "../category/category";
import { IEntry } from "../entry/entry.interface";

export class Entry implements IEntry {
id:number;
value:number;
dateCreated:Date;
categoryId:any;

 constructor(id:number, value:number, dateCreated:Date, categoryId:any) {
    this.id = id;
    this.value = value;
    this.dateCreated = dateCreated;
    this.categoryId = categoryId;
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
