import { IMonth } from "./month-selector/month-selector.component";

export interface IEntry{
    id: any;
    month:IMonth;
    value:number;
    dateCreated: number;
}