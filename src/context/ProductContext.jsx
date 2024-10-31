import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// Create context
const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0); // Starts at page 0
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 20; // Number of products per fetch

  // Fetch products with pagination
  const fetchProducts = async () => {
    {
      setLoading(true);
      try {
        const skip = page * limit;
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        setProducts((prev) => [...prev, ...response.data.products]);
        setHasMore(response.data.products.length > 0); // Check if more products are available
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Fetch products when the page changes
  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <ProductContext.Provider value={{ products, loading, setPage, hasMore }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProductContext = () => useContext(ProductContext);
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
