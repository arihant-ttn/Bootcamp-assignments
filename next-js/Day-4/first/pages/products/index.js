
import React, { useState, useEffect, useReducer } from "react";
import { fetchProd, addProduct, deleteProd } from "./prodActions";
import { initialState, prodReducer } from "./prodReducer";

const Index = () => {
  const [state, dispatch] = useReducer(prodReducer, initialState);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchProd(dispatch);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct(dispatch, id, title, description);
    setId(0);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleAdd} className="space-y-4 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center">Add a Product</h2>
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Id:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product ID"
            required
          />
          <label className="font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product title"
            required
          />
          <label className="font-medium">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product description"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Product
        </button>
      </form>
      <ul className="mt-8 space-y-4">
        {state.product.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <div>
              <p className="font-semibold">ID: {product.id}</p>
              <p className="text-lg font-medium">{product.title}</p>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <button
              onClick={() => deleteProd(dispatch, product.id)}
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;

