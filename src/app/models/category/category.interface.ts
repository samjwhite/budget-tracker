import { IEntry } from "../entry.interface";

export enum CategoryType{
    Income,
    Expense,
    Investment
}

export interface ICategory {
    id:number;
    name:string;
    type: CategoryType;
    entries?: IEntry[];
}

