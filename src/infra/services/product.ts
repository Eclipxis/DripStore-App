import { inject, injectable } from "inversify";
import BaseService from "./base";
import { IProductService } from "./contracts/product";
import Pagination from "@/entities/pagination";
import Product from "@/entities/product";
import { CreateProductDTO, ParamsGetProductDTO, ProductDTO, UpdateProductDTO } from "./dtos/product.dto";
import { IHttpClient } from "../http/contracts/http-client";

@injectable()
class ProductService extends BaseService implements IProductService {
  private readonly BASE_URL: string = process.env.NEXT_PUBLIC_API_URI!

  constructor (
    @inject('HttpClient') private readonly httpClient: IHttpClient
  ) {
    super()
  }

  async getProducts (params: ParamsGetProductDTO): Promise<Pagination<Product[]>> {
    const sp = new URLSearchParams();
    sp.set('page', String(params.page));
    sp.set('perPage', String(params.perPage));
    if (params.search) sp.set('search', params.search);
    params.categories?.forEach(c => sp.append('categories', c));

    const dto = await this.httpClient.get({
      url: `${this.BASE_URL}/product?${sp.toString()}`
    });

    const pagination = new Pagination<Product[]>()

    pagination.page = dto.page;
    pagination.pages = dto.pages;
    pagination.data = dto.data.map(ProductDTO.toProduct);
    
    return pagination;
  }

  async getProduct (productId: string): Promise<Product> {
    const dto = await this.httpClient.get({
      url: `${this.BASE_URL}/product/${productId}`,
    });
    return ProductDTO.toProduct(dto);
  }

  async create (product: Product): Promise<void> {
    if (!this.isLogged())
      throw new Error('É necessário estar logado para realizar a ação');

    await this.httpClient.post({
      url: `${this.BASE_URL}/product`,
      headers: this.headers,
      data: CreateProductDTO.toDTO(product)
    });
  }

  async update (product: Product): Promise<void> {
    if (!this.isLogged())
      throw new Error('É necessário estar logado para realizar a ação');

    await this.httpClient.put({
      url: `${this.BASE_URL}/product/${product.id}`,
      headers: this.headers,
      data: UpdateProductDTO.toDTO(product)
    });
  }

  async delete (productId: string): Promise<void> {
    if (!this.isLogged())
      throw new Error('É necessário estar logado para realizar a ação');

    await this.httpClient.delete({
      url: `${this.BASE_URL}/product/${productId}`,
      headers: this.headers,
    });
  }

  async hide (productId: string): Promise<void> {
    if (!this.isLogged())
      throw new Error('É necessário estar logado para realizar a ação');

    await this.httpClient.put({
      url: `${this.BASE_URL}/product/${productId}/hide`,
      headers: this.headers,
    });
  }

  async show (productId: string): Promise<void> {
    if (!this.isLogged())
      throw new Error('É necessário estar logado para realizar a ação');
    
    await this.httpClient.put({
      url: `${this.BASE_URL}/product/${productId}/show`,
      headers: this.headers,
    });
  }
}

export default ProductService;