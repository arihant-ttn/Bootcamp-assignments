"use client";

import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(0, 10)))

      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 ">Top 10 Products</h1>
      <table className="w-full border-collapse border border-gray-300  l">
        <thead className="bg-gray-100 ">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, title, category, description, price }) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 text-center">{id}</td>
              <td className="border border-gray-300 p-2">{title}</td>
              <td className="border border-gray-300 p-2">{category}</td>
              <td className="border border-gray-300 p-2">{description}</td>
              <td className="border border-gray-300 p-2 text-center">
                ${price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <h1>Hello!</h1>
  );
};

export default App;
