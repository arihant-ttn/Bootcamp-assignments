import React from 'react'

export const revalidate =60
export const dynamicParams=true;
export const generateStaticParams= async()=>{
  const res= await fetch ('https://dummyjson.com/products')
  const data = await res.json()

  return data.products.map((element) => ({
    id: element.id.toString(),
  }));
  
}

const Page =async ({params}) => {

  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 }, 
  });

  if (!res.ok) {
    return <p>Product not found</p>;
  }

  const data = await res.json();
  return (
      <div>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
    </div>
  )
}

export default Page
