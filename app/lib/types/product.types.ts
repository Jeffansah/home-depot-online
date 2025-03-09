export interface ICreateProduct {
  title: string;
  description: string;
  price: number;
  images: string[];
  categories: string[];
  stock: number;
  tags: string[];
  slug: string;
}
