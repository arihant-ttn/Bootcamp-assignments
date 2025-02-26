import React from "react";
import { useContext } from "react";
import { ProdContext } from "./context";
const index = () => {
  const { product, loading} = useContext(ProdContext);

  if (loading) return <h1>Loading....</h1>;
  {console.log("hello")}
  return (
    <div>
        
      {product.map((product) => (
        <>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </>
      ))}
    </div>
    
  )
};

export default index;
