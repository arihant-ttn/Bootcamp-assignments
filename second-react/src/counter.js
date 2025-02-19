import React from 'react'
import { useState } from 'react'


export default function Counter() {
    const [count,setCount]=useState(0);
    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
      
        
        if(count>0){

          setCount(count-1);
        }else{
          setCount(0);
          alert("Cannot Decrement less than 0")
        }

    }
    
  return (
    <div><>
    </>
        <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}
