"use client"
import Link from 'next/link'
import React from 'react'
import {list} from "../list"



function List() {
  return (
    <div className=' max-w-7xl md:mb-10  md:justify-center flex space-x-4  text-sm md:text-lg md:space-x-8 overflow-scroll scrollbar-hide'>
   
   {
  
    list.map((item)=>(
      <Link href={item.ref} key={item.id} className='hidden md:flex cursor-pointer hover:scale-102
      transform transtition duration-300 hover:text-white ease-out'>
        {item.title}      
</Link>
    ))

   }

   

    


    </div>
  )
}

export default List