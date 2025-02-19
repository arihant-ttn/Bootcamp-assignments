import React from 'react'
import { useState } from 'react'
export default function Parent() {
    const [state,setState]=useState("This is parent")
  return (
    <div>
        <h1>{state}</h1>
        {/* <button onClick={}></button> */}
    </div>
  )
}
