import { Category} from "./category";
import { CategoryType } from "./category.interface";

export const CATEGORIES: Category[] = [
  new Category(1, "🥗 Food",CategoryType.Expense, []),
  new Category(2, "⚡ Utilities",CategoryType.Expense,[]),
  new Category(3, "💵 Salary",CategoryType.Income,[]),
]
