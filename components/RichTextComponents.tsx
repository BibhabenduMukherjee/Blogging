import React from 'react'
import Image from "next/image"
import urlFor from '../lib/urlFor'
import Link from 'next/link'
import Code from "../components/Code"
export const  RichTextComponents = {
    types: {
      image: ({value} :any) => {
         return (
            <div className='relative w-full h-[250px] md:h-[600px] m-10 mx-auto'>
            <Image src={urlFor(value).width(600).url()}
            className = 'object-cover'
            alt='Blog Post Image'
            fill
            />
            </div>
         )
      },
      code: ({ value }:any) => {
        const { code, filename, language } = value;
        return (
          <Code code={code}  filename = {filename} language = {language}  />
        );
      },
    
    },

   
        list : {
  bullet : ({children} : any)=>(
    <ul className=' ml-4 md:ml-8 py-1 list-disc text-[17px] text-[#3f6cce] md:text-[20px] space-y-5'>{children}</ul>
  ),
  number  : ({children} : any)=> (
    <ol className='ml-4 py-1 list-disc space-y-5'>{children}</ol>
  ),
  },
    block : {
    h1: ({children} : any)=>(
        <h1 className = "text-5xl py-5 font-bold">{children}</h1>
    ),
  
    h2: ({children} : any)=>(
        <h2 className = "text-4xl py-5 font-bold">{children}</h2>
    ),
    h3: ({children} : any)=>(
        <h3 className = " text-green-700 text-3xl py-5 font-bold">{children}</h3>
    ),
    h4: ({children} : any)=>(
        <h4 className = "text-2xl py-5 font-bold">{children}</h4>
    ),

    normal : ({children} : any)=>{
     return <p className='  text-[16px] md:text-[19px]'>{children}</p>
    },
   
    blockquote : ({children} : any) => (
        <blockquote className='border-l-[#F7AB0A] text-lg border-l-4 pl-5 py-2 my-5 '>"{children}"</blockquote>
    )
    
    ,
   


    
   
  },

    marks:{
    link : ({children , value} : any) => {
        const rel = !value.href.startsWith("/") 
           ? "noreferrer noopener" : undefined

           return (
            <Link href = {value.href} rel = {rel}  className ="underline decoration-[#F7AB0A] hover:decoration-black">{children}</Link>
           )
    },
    // code: ({code}: any) => {
    //   <div className='m-2 md:mx-auto flex flex-col'>
    //   <Code code = {code}/>
    //   </div>
    // },
  
  }
  
      
}

