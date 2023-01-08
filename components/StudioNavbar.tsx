import React from 'react'
import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"
function StudioNavbar(props : any) {
  return (
    <div>
  <div className='p-5 flex items-center justify-between'>
    <Link className='text-[#F7AB0A] flex items-center' href= "/">
        <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A] mr-2'/>
        Go to Website</Link>


      <div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]'>
        <h1 className='font-bold text-xl text-white'>
            Create content that leads world's thought --
        </h1>
        <Link href="/" className='text-[#F7AB0A] font-bold ml-2'>
            Codelify App
        </Link>
      </div>

  </div>

    <>{props.renderDefault(props)}</>
  
    </div>
  )
}

export default StudioNavbar