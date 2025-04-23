// app/lib/types/cart.types.ts
import { IResponseProduct } from "./product.types";

// Server-side types
export interface CartDocument {
  userId: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

// Client-side types
export interface CartItem {
  product: IResponseProduct;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isLoading: boolean;
  isAddingToCart: boolean;
  error: string | null;
  totalItems: number;
  totalPrice: number;
}

export interface CartStore extends CartState {
  // Cart UI state
  isOpen: boolean;
  toggleCart: () => void;

  // Cart operations
  initCart: () => Promise<void>;
  addItem: (product: IResponseProduct, quantity?: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;

  // Error handling
  setError: (error: string | null) => void;
}
