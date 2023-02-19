
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { client } from '../../../lib/sanity.client'
import console from 'console'
import BlogDsList from '../../../components/BlogDsList'


 async function page() {


  return (
    <div className='max-w-2xl mx-auto  '>
   <BlogDsList/>
    </div>
  )
}

export default page