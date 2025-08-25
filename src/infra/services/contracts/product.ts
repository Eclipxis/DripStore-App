import Pagination from "@/entities/pagination";
import Product from "@/entities/product";
import { ParamsGetProductDTO } from "../dtos/product.dto";

export interface IProductService {
  getProducts: (params: ParamsGetProductDTO) => Promise<Pagination<Product[]>>;
  getProduct: (productId: string) => Promise<Product>;
  create: (product: Product) => Promise<void>;
  update: (product: Product) => Promise<void>;
  delete: (productId: string) => Promise<void>;
  hide: (productId: string) => Promise<void>;
  show: (productId: string) => Promise<void>;
}