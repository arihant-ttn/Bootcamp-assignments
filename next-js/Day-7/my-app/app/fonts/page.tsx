import { Roboto } from "next/font/google";

const poppins = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
import React from 'react'

const index = () => {
  
  return (
    <div>
      <h1 className={poppins.className}>Hello, Next.js!</h1>
    </div>
  )
}

export default index
