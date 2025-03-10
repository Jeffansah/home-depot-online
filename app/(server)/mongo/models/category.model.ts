import { Schema, model, models, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);

export const Category = models.Category || model("Category", categorySchema);
