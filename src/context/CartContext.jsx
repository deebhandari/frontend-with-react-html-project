import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data/products.js";

const CartContext = createContext(null);

const FREE_SHIPPING_OVER = 3000;
const SHIPPING_FEE = 150;

export function CartProvider({ children }) {
  // The cart only stores { id, quantity }. Product details are looked up from data.
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("emart-cart")) || [];
    } catch {
      return [];
    }
  });

  // Save the cart so it survives a page refresh (bonus feature).
  useEffect(() => {
    try {
      localStorage.setItem("emart-cart", JSON.stringify(items));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [items]);

  const addToCart = (productId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: productId, quantity }];
    });
  };

  const increase = (productId) =>
    setItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
    );

  const decrease = (productId) =>
    setItems((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );

  const removeFromCart = (productId) =>
    setItems((prev) => prev.filter((item) => item.id !== productId));

  const clearCart = () => setItems([]);

  // Join cart entries with product data and calculate totals.
  const lines = items
    .map((item) => ({ product: products.find((p) => p.id === item.id), quantity: item.quantity }))
    .filter((line) => line.product);

  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  const value = {
    lines, count, subtotal, shipping, total,
    addToCart, increase, decrease, removeFromCart, clearCart,
    freeShippingOver: FREE_SHIPPING_OVER,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside <CartProvider>");
  return context;
}
