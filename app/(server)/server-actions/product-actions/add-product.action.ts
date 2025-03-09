"use server";

import Product, { IProduct } from "@/app/(server)/mongo/models/products.model";
import { connectToDatabase } from "../../mongo";
import { ICreateProduct } from "@/app/lib/types/product.types";

export const addProduct = async (product: ICreateProduct) => {
  await connectToDatabase();

  try {
    const newProduct = (await Product.create(product)) as IProduct;

    return JSON.parse(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
};
