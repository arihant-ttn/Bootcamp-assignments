import { useState } from "react";

import React from 'react'

export default function Login() {
    const [toggle,setToggle]=useState(false)

    const handleClick =()=>{
        setToggle(!toggle)
    }
  return (
    <div>

      <h1>{toggle ? "Welcome back":"Please Log In"}</h1>
      <button onClick={handleClick}>{toggle ? "Logout":"Login"}</button>
    </div>
  )
}
