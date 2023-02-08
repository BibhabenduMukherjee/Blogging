
"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import { useSession } from "next-auth/react"


function Header() {
  const { data: session, status } = useSession()
  //console.log(user)

   return (
  
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href="/">
            <Image className='rounded-full' src= "/2.png" alt="logo" width={50} height ={50} />
          
        </Link>
        <h1>Codelify</h1>
      </div>


      <div>


        

          {
            status === "authenticated" ?   <Link href="/" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'>
            Join Us
            </Link>  :   <Link href="/login" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'>
        Login
        </Link> 
          }
       
        
        

      
      </div>
    </header>
  )
}

export default Header