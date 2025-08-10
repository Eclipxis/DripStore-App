import { Category } from "./category";

class Product {
  id!: string;
  name!: string;
  category!: Category
  description?: string;
  price?: number;
  pictures!: string[];
  hide!: boolean;
}

export default Product;