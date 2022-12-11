import { ICategory } from "../category/category.interface";

export interface IEntry{
    id: any;
    value:number;
    dateCreated: Date;
    category: ICategory;
}