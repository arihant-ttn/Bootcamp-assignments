"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-md object-cover"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
