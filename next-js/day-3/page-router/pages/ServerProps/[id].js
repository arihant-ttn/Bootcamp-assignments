import React from "react";

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  return {
    props: { data },
  };
};

const ProductPage = ({ data }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
        <p className="text-sm text-gray-500 mb-2">Product ID: {data.id}</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 focus:text-blue-700 focus:outline-none" tabIndex={0}>
          {data.title}
        </h1>
        <p className="text-gray-700 leading-relaxed hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md transition-colors" tabIndex={0}>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;

