import { Schema, Types, model, models, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  images: string[];
  categories: string[];
  stock: number;
  slug: string;
  tags: string[];
}

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true },
    categories: { type: [String], required: true },
    stock: { type: Number, required: true },
    slug: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true },
);

const Product = models.Product || model<IProduct>("Product", productSchema);

export default Product;
