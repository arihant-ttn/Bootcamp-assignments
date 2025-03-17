"use client"
import {useState} from "react"
import dynamic from "next/dynamic"

import React from 'react'

const Popup = dynamic(() => import("@/components/Popup"));
const Page = () => {

    const [isOpen,setIsOpen]=useState(false);

  return (
      <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Open Pop-up
      </button>

      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
    </div>
  )
}

export default Page
