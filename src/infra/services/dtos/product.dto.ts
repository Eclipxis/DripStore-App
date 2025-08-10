import { Category } from "@/entities/category";
import Product from "@/entities/product";

export class ProductDTO {
  productId!: string;
  name!: string;
  category!: Category;
  description?: string;
  price?: number;
  pictures!: string[];
  isHide!: boolean;

  static toProduct(dto: ProductDTO): Product {
    const product = new Product();

    product.id = dto.productId;
    product.name = dto.name;
    product.category = dto.category;
    product.description = dto.description;
    product.price = dto.price;
    product.pictures = dto.pictures;
    product.hide = dto.isHide;

    return product;
  }

  static toDTO(product: Product): ProductDTO {
    return {
      productId: product.id,
      name: product.name,
      category: product.category,
      isHide: product.hide,
      pictures: product.pictures,
      description: product.description,
      price: product.price
    }
  }
}

export class CreateProductDTO {
  name!: string;
  category!: Category;
  pictures!: string[];
  description?: string;
  price?: number;

  static toDTO(product: Product): CreateProductDTO {
    return {
      name: product.name,
      category: product.category,
      pictures: product.pictures,
      description: product.description,
      price: product.price
    }
  }
}

export class PictureDTO {
  picture!: string;
  index!: number;
}

export class UpdateProductDTO {
  name!: string;
  category!: Category;
  description?: string;
  price?: number;
  picturePayloads!: PictureDTO[]

  static toDTO(product: Product, picturePayloads: PictureDTO[]): UpdateProductDTO {
    return {
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      picturePayloads
    }
  }
}

export class ParamsGetProductDTO {
  page!: number;
  perPage!: number;
  search?: string;
  categories?: Category[]
}