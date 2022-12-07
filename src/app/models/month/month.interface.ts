import { ICategory } from "../category/category.interface";



export interface IMonth{
    id:number;
    name:string;
    categories?:ICategory[];
  }