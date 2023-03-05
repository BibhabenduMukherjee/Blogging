
"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import { signOut, useSession } from "next-auth/react"


function Header() {
  const { data: session, status } = useSession()
  //console.log(user)

   return (
  
    <header className='flex items-center justify-between space-x-2 font-bold px-6 py-3 md:px-10 md:py-5'>
      <div className='flex items-center space-x-2'>
        <Link href="/">
            <Image className='rounded-full ' src= "/2-min.png" alt="logo" width={50} height ={50} />
          
        </Link>
        <h1>Codeordie</h1>
      </div>


      <div>


        

          {
            status === "authenticated" ?   <Link href="/" className='px-3 py-3 text-xs md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'>
            <button onClick={()=>{signOut()}} > Sign Out </button>
            </Link> :   <Link href="/login" className='px-3 py-3 text-xs md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'>
        Login
        </Link> 
          }


       
        
        

      
      </div>
    </header>
  )
}

export default Header