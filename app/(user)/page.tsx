import React from 'react'
import "../../styles/globals.css"
import { groq } from 'next-sanity'
import { client } from "../../lib/sanity.client"
import ClientSideRoute from '../../components/ClientSideRoute'
import Image
 from 'next/image'
 import urlFor from '../../lib/urlFor'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import {Hero} from "../../components/Hero"




const query = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

// add two number

 export const revalidate = 240


//  async function getS(){
//   return await unstable_getServerSession(authOptions)
//  }

 async function Homepage() {
   
  const posts = await client.fetch(query);
  
  //console.log(posts)
  return ( 


 

    <div className='mt-5'>
     
    <hr className ="border-[#F7AB0A] " />

    <Hero/>
    <div className=" bg-purple-700 custom-shape-divider-top-1676474210">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
   
    <h2 className='  relative -top-14 text-4xl text-center mb-14'>Recent Posts</h2>
    <div className= ' relative -top-[90px]  grid grid-cols-1 md:grid-cols-3 gap-4 px-4  gap-y-16'>
      
      {posts.map((post:any)=>(
 
        // ^post image + some information 
        
       <ClientSideRoute route = {`/post/${post.slug.current}`}>

      
        <div key={post._id} className='flex flex-col p-2 group cursor-pointer'>
       <div className='relative w-full h-80 drop-shadow-xl
        group-hover:scale-105 transition-transform divide-neutral-100 ease-out'>
          <Image src= {urlFor(post.mainImage).url()} alt = "logo"
          className='object-cover object-left lg:object-center'
          fill
          priority
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
                <div key={categoty._id} className = 'bg-[#F7AB0A] px-3 py-1 rounded-xl text-sm font-semibold  text-black ' >
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

         </ClientSideRoute  >

        

      ))}
      
       
      
    </div>

    <div className=" relative bg-zinc-700 custom-shape-divider-bottom-1676617131">
      {/* <div className=' overflow-hidden w-10 h-10 absolute top-1 -left-7 rounded-lg bg-yellow-400 animate-spin'></div> */}
      <div className='p-4 space-x-5 flex justify-center items-center md:flex-row flex-col'>
        <h2 className=' md:animate-bounce md:mt-14 text-lg text-white' >Wellcome Buddy!!</h2>
        <h2 className=' md:mt-14 animate-bounce text-xl text-yellow-500'>Social Media Coming Soon.</h2>
      </div>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="  shape-fill"></path>
    </svg>
</div>
    
    
  </div>
 
  )
}

export default Homepage