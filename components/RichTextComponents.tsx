import React from 'react'
import Image from "next/image"
import urlFor from '../lib/urlFor'
import Link from 'next/link'
export const  RichTextComponents = {
    types: {
      image: ({value} :any) => {
         return (
            <div className='relative w-full h-96 m-10 mx-auto'>
            <Image src={urlFor(value).url()}
            className = 'object-cover'
            alt='Blog Post Image'
            fill
            />
            </div>
         )
      },
    },

   
        list : {
  bullet : ({children} : any)=>(
    <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
  ),
  number  : ({children} : any)=> (
    <ol className='ml-10 py-5 list-disc space-y-5'>{children}</ol>
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
        <h3 className = "text-3xl py-5 font-bold">{children}</h3>
    ),
    h4: ({children} : any)=>(
        <h4 className = "text-2xl py-5 font-bold">{children}</h4>
    ),

    normal : ({children} : any)=>{
     return <p className=' text-[22px] md:text-[26px]'>{children}</p>
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
    }
  }
  
      
}


// const myPortableTextComponents = {
//     types: {
//       image: ({value} :any) => {
//          return (
//             <div className='relative w-full h-96 m-10 mx-auto'>
//             <Image src={urlFor(value).url()}
//             className = 'object-cover'
//             alt='Blog Post Image'
//             fill
//             />
//             </div>
//          )
//       },
//     }
// ,
//     list : {
//   bullet : ({children} : any)=>(
//     <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
//   ),
//   number  : ({children} : any)=> (
//     <ol className='ml-10 py-5 list-disc space-y-5'>{children}</ol>
//   ),

//     },
//   block : {
//     h1: ({children} : any)=>(
//         <h1 className = "text-5xl py-10 font-bold">{children}</h1>
//     ),

//     h2: ({children} : any)=>(
//         <h2 className = "text-4xl py-10 font-bold">{children}</h2>
//     ),
//     h3: ({children} : any)=>(
//         <h3 className = "text-3xl py-10 font-bold">{children}</h3>
//     ),
//     h4: ({children} : any)=>(
//         <h4 className = "text-2xl py-10 font-bold">{children}</h4>
//     ),
//     blockpoint : ({children} : any) => (
//         <blockquote className='border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5 '>{children}</blockquote>
//     )
//   },
//   marks:{
//     link : ({children , value} : any) => {
//         const rel = !value.href.startsWith("/") 
//            ? "noreferrer noopener" : undefined

//            return (
//             <Link href = {value.href} rel = {rel}  className ="underline decoration-[#F7AB0A] hover:decoration-black">{children}</Link>
//            )
//     }
//   }
  
//     }
  