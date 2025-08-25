import Pagination from "@/entities/pagination";
import Product from "@/entities/product";
import { ParamsGetProductDTO } from "../dtos/product.dto";

export interface IProductService {
  getProducts: (params: ParamsGetProductDTO) => Promise<Pagination<Product[]>>;
  getProduct: (productid: string) => Promise<Product>;
  create: (product: Product) => Promise<void>;
  update: (product: Product) => Promise<void>;
  delete: (productid: string) => Promise<void>;
  hide: (productid: string) => Promise<void>;
  show: (productid: string) => Promise<void>;
}