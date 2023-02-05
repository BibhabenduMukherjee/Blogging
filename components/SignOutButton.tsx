"use client"
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React from 'react'



function SignOutButton(user : any) {

 

  return (
    <div>
        <button onClick = {()=>{
          signOut({callbackUrl : "/"})
         
        }}>Sign Out</button>
    </div>
  )
}

export default SignOutButton