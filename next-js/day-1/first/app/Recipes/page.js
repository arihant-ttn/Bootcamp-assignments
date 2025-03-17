'use client'
import React from 'react'
import { useEffect,useState } from 'react'
export default function Page() {
    // const data={}
    const [recipes,setRecipes]= useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes ")
        .then((response)=>{
          return response.json()
        })
        .then((data)=>setRecipes(data.recipes.slice(0,10)))
        .catch((error)=>"Error: "+ error)
    },[])
   
//    console.log(data)


  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Top 10 Recipes</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Servings</th>
            <th className="border border-gray-300 p-2">Prep Time</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(({ id, name, servings, prepTimeMinutes }) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 text-center">{id}</td>
              <td className="border border-gray-300 p-2">{name}</td>
              <td className="border border-gray-300 p-2">{servings}</td>
              <td className="border border-gray-300 p-2 text-center">{prepTimeMinutes} mins</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
    </div>
    </div>
  )
}
