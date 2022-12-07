import { ICategory } from "./category.interface";
import { IEntry } from "../entry.interface";

export class Category implements ICategory {
id:number;
name:string;
entries: IEntry[];

 constructor(id:number, name:string, entries: IEntry[]){
    this.id = id;
    this.name = name;
    this.entries = entries;
 };

 getValuesSum(){
    let values:number[] = [];
    for(let entry of this.entries){
        if(!entry.value) continue; 
      values.push(+entry.value);       
    }
   return +values.reduce((a, b) => a + b, 0) 
 }
}
