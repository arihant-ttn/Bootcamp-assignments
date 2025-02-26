import React from 'react'
import styles from './text.module.css'
const Page = async () => {
    const res = await fetch ('https://dummyjson.com/products')
    const data = await res.json();

  return (
    <div>
        {

            data.products.map((items)=>(
                <div key = {items.id}>
                <p className={styles.paragraph}>{items.id}</p>
      <p className={`${styles.paragraph} ${styles.accent}`}>{items.title}</p>
      <p className={`${styles.paragraph} ${styles.secondary}`}>{items.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Page
