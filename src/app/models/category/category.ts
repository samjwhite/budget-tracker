import { CategoryType, ICategory } from "./category.interface";
import { IEntry } from "../entry.interface";

export class Category implements ICategory {
id:number;
name:string;
type: CategoryType;
entries?: IEntry[];

 constructor(id:number, name:string,type:CategoryType, entries: IEntry[]){
    this.id = id;
    this.name = name;
    this.type = type;
    this.entries = entries;
 };

 getValuesSum(){
    let values:number[] = [];
    if(this.entries){
    for(let entry of this.entries)
    {
        if(!entry.value) continue; 
      values.push(+entry.value);       
    }
   return +values.reduce((a, b) => a + b, 0) 
  }
  return;
 }
}
