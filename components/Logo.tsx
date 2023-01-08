import React from 'react'
import Image from 'next/image'
function Logo(props:any) {
  return (
    <div className='flex items-center space-x-2'>
      <Image className='rounded-full object-cover' width={50} height={50} 
      src ="/2.png" alt='logo'
      />
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default Logo