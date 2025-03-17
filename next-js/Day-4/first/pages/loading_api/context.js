import { createContext, useState, useEffect } from "react";

export const ProdContext = createContext();

const ProdProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProd = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10`);
      const data = await res.json();
      setProduct(data.products); 
      console.log("hello")
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProd();
  }, []);

  return (
    <ProdContext.Provider value={{ product, loading, fetchProd }}>
      {children}
    </ProdContext.Provider>
  );
};

export default ProdProvider;
