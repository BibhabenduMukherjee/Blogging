"use client"

import React, { useEffect } from 'react'
import Prismjs from "prismjs"
import "../styles/globals.css"
function Code({code , filename,language }) {
  
   
    useEffect(()=>{
       
        Prismjs.highlightAll()
    })
  return (
    <div className='text-center '>
    <div className='relative top-2 w-[190px] bg-slate-800 text-lg text-white'>{filename}</div>
    <pre className="language-javascript">
    <code className="language-javascript ">{code}</code>
    </pre>
    

    </div>
  )
}

export default Code