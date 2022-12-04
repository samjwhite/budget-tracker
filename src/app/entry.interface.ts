import { ICategory } from "./category.interface";
import { IMonth } from "./month-selector/month-selector.component";

export interface IEntry{
    id: any;
    month:IMonth;
    category: ICategory;
    value:number;
    dateCreated: number;
}