import { ShoppingCartIcon } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <div className="flex items-center gap-1">
      <ShoppingCartIcon className="text-dark-400 size-4" />
      <p>(0)</p>
    </div>
  );
};

export default Cart;
