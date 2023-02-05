

import React from 'react'
import { getProviders  } from 'next-auth/react'

import "../../../../styles/globals.css"
import SignInComponent from '../../../../components/SignInComponent'
 
async function page() {
   // const providers = await getProviders();
   // console.log(providers)
  
  return (
    <div>
  
     

      <SignInComponent />

    </div>
  )
}






export default page