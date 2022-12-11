import {ICategory} from "./category.interface";

export class Category implements ICategory {
  id: number;
  name: string;
  type: "expense" | "income";

  constructor(id: number, name: string, type: "expense" | "income") {
    this.id = id;
    this.name = name;
    this.type = type;
  };
}
