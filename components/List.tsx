"use client"
import Link from 'next/link'
import React from 'react'

const list = [
  {
    id : "1", 
    title : "Data Structure",
   disable : false,
   ref:"/ds"
},


// {
//   id : "4", 
//   title : "Core Subject",
//  disable : false,
//  ref : "/devops"
// },
// {
//   id : "5", 
//   title : "Web-Dev",
//  disable : false,
//  ref : "/webdevelopment"
// },
{
  id : "6", 
  title : "Mechine learning",
 disable : false,
 ref : "/ml"
},
{
  id : "7", 
  title : "Full-Stack",
 disable : false,
 ref : "/mern"
},

{
  id : "9", 
  title : "Security",
 disable : false,
 ref : "/security"
},
]


function List() {
  return (
    <div className=' max-w-7xl md:mb-10  md:justify-center flex space-x-4  text-sm md:text-lg md:space-x-8 overflow-scroll scrollbar-hide'>
   
   {
  
    list.map((item)=>(
      <Link href={item.ref} key={item.id} className='cursor-pointer hover:scale-105
      transform transtition duration-300 ease-out'>
        <button style={{ whiteSpace: 'nowrap' }}  className=' p-1 underline active:bg-white focus:outline-none focus:ring focus:ring-white font-mono font-bold  hover:opacity-60' disabled={item.disable}>{item.title}</button>        
</Link>
    ))

   }

   

    


    </div>
  )
}

export default List