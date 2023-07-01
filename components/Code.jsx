"use client"

import React, { useEffect } from 'react'
import Prismjs from "prismjs"
import "../styles/globals.css"
function Code({code , filename,language }) {
  useEffect(()=>{
       
        Prismjs.highlightAll()
    })
  return (
    <div className='text-center md:max-w-3xl mx-auto '>
    {/* <div className='relative rounded-md top-2   bg-slate-800 text-lg text-white'>{filename}</div> */}
    <pre className="language-javascript rounded-lg ">
    <code className="language-javascript ">{code}</code>
    </pre>
    

    </div>
  )
}

export default Code