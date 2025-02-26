'use client'

import { useState,useEffect } from "react"

import products from './products.json'

import React from 'react'

export default function index() {
    const [prod, setProd] = useState([]);
    useEffect(() => {
        setProd(products)
      }, []);
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 absolute top-[200px]  left-[300px]" >
      {prod.map(({ id, images, name, description }) => (
        <div
          key={id}
          className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={images[0]}
            alt={name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <p className="text-lg font-semibold mb-2">{name}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      ))}
    </div>
      
    </div>
  )
}
