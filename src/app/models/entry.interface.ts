import { IMonth } from "./month/month.interface";


export interface IEntry{
    id: any;
    month:IMonth;
    value:number;
    dateCreated: number;
}