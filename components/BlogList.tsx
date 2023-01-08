import React from 'react'
import Image from 'next/image'
import urlFor from '../lib/urlFor'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import ClientSideRoute from './ClientSideRoute'
type Props = {
    posts : Post[]
}
function BlogList({posts} : Props) {
    console.log(posts.length)
  return (
    <div>
      <hr className ="border-[#F7AB0A] mb-10" />
      <div className= '  grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
        {posts.map((post:any)=>(
   
          // ^post image + some information 
          
         <ClientSideRoute route = {`/post/${post.slug.current}`}>

        
          <div key={post._id} className='flex flex-col p-2 group cursor-pointer'>
         <div className='relative w-full h-80 drop-shadow-xl
          group-hover:scale-105 transition-transform divide-neutral-100 ease-out'>
            <Image src= {urlFor(post.mainImage).url()} alt = "logo"
            className='object-cover object-left lg:object-center'
            fill
            />
       
          <div className='absolute bottom-0 w-full
          bg-opacity-30 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between '>

            <div>
              <p className='font-bold'>{post.title}</p>
              <p className=''>{
                new Date(post._createdAt).toLocaleDateString(
                  "en-IN",{
                    day : "numeric",
                    month : "long",
                    year : "numeric"
                  }
                 
                )
              }</p>
            </div>

             <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                 {post.categories.map((categoty:Category) =>(
                  <div className = 'bg-[#F7AB0A] px-3 py-1 rounded-xl text-sm font-semibold  text-black ' >
                    <p>{categoty.title}</p>
                   
                  </div>
                 ))}
             </div>

          </div>

         </div>
         
       
         <div className = "mt-5 flex-1">
           <p className='underline text-lg font-blod'>{post.title}</p>
           <p className='line-clamp-2 text-gray-500'>{post.description}</p>
         </div>
       <p className = 'mt-5 font-bold flex items-center group-hover:underline'
       >
        Read Post
        <ArrowUpRightIcon className = 'ml-2 h-4 w-4'/>
       </p>
           </div>

           </ClientSideRoute>

          

        ))}
        

        
      </div>
      
    </div>
  )
}

export default BlogList