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

export interface IResponseProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  categories: {
    _id: string;
    name: string;
    slug: string;
  }[];
  stock: number;
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
