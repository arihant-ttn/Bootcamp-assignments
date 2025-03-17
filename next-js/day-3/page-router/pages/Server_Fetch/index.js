// pages/server-fetch.tsx
import React from 'react';

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return {
    props: {
      data: data.products, 
    },
  };
};

const ServerFetch = ({ data }) => {
  return (
    <div>
      {data.slice(0,5).map(({ id, title, description }) => (
        <div key={id}> 
          <p>{id}</p>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServerFetch;
