import { IEntry } from "../entry.interface";


export interface ICategory {
    id:number;
    name:string;
    entries: IEntry[];
}

