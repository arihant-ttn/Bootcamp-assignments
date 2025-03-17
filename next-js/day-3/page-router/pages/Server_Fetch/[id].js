import React from "react";
import styles from "./text.module.css"; 

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const paths = data.products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10, 
  };
};

const ProductPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>ID: {data.id}</p>
      <p className={`${styles.paragraph} ${styles.accent}`}>{data.title}</p>
      <p className={`${styles.paragraph} ${styles.secondary}`}>
        {data.description}
      </p>
    </div>
  );
};

export default ProductPage;
