import React, { useState } from 'react'

export default function Login() {
    const [toggle,setToggle]= useState(false)

    const handleClick = () => {
        setToggle(!toggle); 
    
        const btn = document.getElementsByClassName("btn")[0]; 
        if (btn) {
          btn.style.backgroundColor = toggle ? "green" : "red";

        }
      }
    


  return (
    <div>
        <h2>{toggle ? "You are Logged In" :"You are Logged Out"}</h2>
      <button onClick={handleClick} className='btn'>{toggle ? "Logout" : "Login"}</button>
    </div>
  )
}
