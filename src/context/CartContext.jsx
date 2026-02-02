import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  // Initialize state from LocalStorage so data isn't lost on refresh
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("localCart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  // Update LocalStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cart));
  }, [cart]);
  /**
   * Add to Cart Logic:
   * 1. Check if item exists via _id
   * 2. If exists, increment qty
   * 3. If new, add object with qty: 1
   */
  const addToCart = (book) => {
    setCart((prevCart) => {
      const isExisting = prevCart.find((item) => item._id === book._id);
      if (isExisting) {
        return prevCart.map((item) =>
          item._id === book._id 
            ? { ...item, qty: item.qty + 1 } 
            : item
        );
      }
      return [...prevCart, { ...book, qty: 1 }];
    });
  };
  /**
   * Remove a single item entirely from cart
   */
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== bookId));
  };
  /**
   * Clear the entire cart (used after successful order)
   */
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("localCart");
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
// Custom hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};