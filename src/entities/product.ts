import { Category } from "./category";

class Product {
  id!: string;
  name!: string;
  category!: Category
  description?: string;
  price?: number;
  pictures: string[] = [];
  hide: boolean = false;

  isEmpty = () => !this.name || !this.category || !this.pictures.length

  withName(name: string) {
    this.name = name;
    return this;
  }

  withDescription(description: string) {
    this.description = description;
    return this;
  }

  withCategory(category: Category) {
    this.category = category;
    return this;
  }

  withPrice(price?: number) {
    this.price = price;
    return this;
  }

  withPictures(pictures: string[]) {
    this.pictures = [...this.pictures, ...pictures];
    return this;
  }

  removePicture(pictureIndex: number) {
    this.pictures = this.pictures.filter((_, index) => index !== pictureIndex);
    return this;
  }

  toggleHide () {
    this.hide = !this.hide;
    return this;
  }
}

export default Product;