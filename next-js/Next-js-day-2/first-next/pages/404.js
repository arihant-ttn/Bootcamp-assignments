'use client'
import { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import React from 'react'

export default function Erro404() {
    const router = useRouter();
    const [count ,setCount]=useState(5);
    useEffect(() => {
        
    const timer = setInterval(()=>{
        setCount((prev)=>prev-1)
    },1000);
    if(count===0){
        router.replace("/")
    }
    return ()=>clearInterval(timer)
    }, [count,router]);

  return (
    <div>
       <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="text-lg">
        Redirecting to homepage in <span className="font-semibold">{count}</span> seconds...
      </p>
    </div>
    </div>
  )
}
