import { Schema, model, models, Document, Types } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  images: string[];
  categories: Types.ObjectId[];
  stock: number;
  slug: string;
  tags: string[];
}

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    stock: { type: Number, required: true },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  },
);

export const Product = models.Product || model("Product", productSchema);
