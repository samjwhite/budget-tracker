
import { ICategory } from "../category/category.interface";
import { IMonth } from "./month.interface";

export class Month implements IMonth{
id:number;
name:string;
categories:ICategory[] = [];

constructor(id:number, name:string, categories:ICategory[]){
    this.id = id, this.name = name, this.categories = categories
}
}
