import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
// Function to remove item from cart
const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCartContext = () => useContext(CartContext);
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
