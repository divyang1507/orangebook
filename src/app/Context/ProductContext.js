'use client';
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://orangebook-strapibackend-superbase.onrender.com/api/books"); // Update with your API endpoint
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook for using ProductContext
export const useProducts = () => {
  return useContext(ProductContext);
};
