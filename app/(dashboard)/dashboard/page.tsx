import { unstable_getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import React from 'react'
import SignOutButton from '../../../components/SignOutButton'

import { authOptions } from '../../../pages/api/auth/[...nextauth]'



type Props  = {
  session : Awaited<ReturnType<typeof unstable_getServerSession>>
}

async function page() {
  const user = await unstable_getServerSession(authOptions)

  if (!user) {
    redirect(authOptions.pages?.signIn!)
  }


  return (
    <div  className=''>
    
     <section className='w-full  h-[300px] bg-green-500 text-center'>
      <h1 className=' pt-24 text-5xl font-bold'> <span className='text-5xl font-bold text-red-500'>wellcome</span> {user.user?.name} !</h1>
     </section>
      <SignOutButton user = {user}/>

    </div>
  )
}

export default page