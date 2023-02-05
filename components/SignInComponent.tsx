"use client"
import {  signIn  } from 'next-auth/react'

import { Icons } from './icons'
//import { ArrowRightIcon } from 'lucide-react'

type Property = {
  name : string | null | undefined
  email : string | null | undefined
  image : string | null | undefined
}


function SignInComponent() {

  return (
    <div className='flex flex-row justify-center items-center h-screen'>

<button
       onClick={()=>{
        window.location.replace("/")
       }}
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm  font-medium text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 md:top-8 md:left-8"
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </button>
      <h1 className='font-bold text-3xl md:text-5xl mb-4 pl-8  text-black '>Please Sign In</h1>
     
  
      
  
   
   
         <div className=' m-2'>
         
      
      <div className='  rounded-lg p-2 ' >
          <button  className=' bg-slate-600 inline-flex  text-white w-full text-lg items-center justify-center rounded-lg border  px-5 py-3 m-2 text-center  font-medium  hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 hover:text-black dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500' onClick={() => signIn("github" , {
              callbackUrl : "http://localhost:3000/dashboard"
          })} >Sign in with Github</button>
   {/* <button  className=' bg-slate-600 inline-flex w-full items-center hover:text-black justify-center rounded-lg border  px-5 py-3 m-2 text-center text-xl font-medium text-white hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30  dark:focus:ring-slate-500' onClick={() => signIn("google" , {
              callbackUrl : "http://localhost:3000/dashboard"
          })} >Sign in with Google</button> */}

      </div>
 
         </div>

    
     </div>
    

    
  )
}

export default SignInComponent