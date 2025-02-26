'use client'
import { useState,useEffect } from "react"
import React from "react"
import products from './products.json'
import { useRouter } from "next/router"


export default function index() {
    const router = useRouter();
    const { id } = router.query; 
    const product = products.find((produ) => produ.id === id);


  if (!product) {
    return <p className="p-4 text-red-500">Product not found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 absolute top-[200px] left-[300px]">
      <div
        key={product.id}
        className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <p className="text-lg font-semibold mb-2">{product.name}</p>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>
    </div>
  )
}

