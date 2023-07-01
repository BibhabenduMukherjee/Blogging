import React from 'react'
import "../../styles/globals.css"
import { groq } from 'next-sanity'
import { client, clientSecuriy } from "../../lib/sanity.client"
import ClientSideRoute from '../../components/ClientSideRoute'
import Image from 'next/image'
import CrashCourse from "../../components/course/CrashCourse"
  import {urlFor} from '../../lib/urlFor'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import {Hero} from "../../components/Hero"
const query = groq`
*[_type == 'post'][0..5]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

const query_crashcourse = groq`
 *[_type == 'crashcourse']{
  title,
  _id,
  _type,
  mainImage,
  _updatedAt,
  content[]{
    body[]{
      ...
    },
    author->{
      ...
    }
  }
 }
`

// add two number

 export const revalidate = 240


//  async function getS(){
//   return await unstable_getServerSession(authOptions)
//  }

 async function Homepage() {
   
  const posts = await client.fetch(query);
  const crashCourse = await clientSecuriy.fetch(query_crashcourse);
  //console.log(crashCourse)
  //console.log(crashCourse);
  
  
  return ( 
   <div className='mt-5'>
     
    <hr className ="border-[#F7AB0A] " />

    <Hero/>
   
    <h2 className='  relative -top-14 text-4xl text-center mb-14'>Recent Posts</h2>
    <div className= ' relative -top-[90px]  grid grid-cols-1 md:grid-cols-3 gap-4 px-4  gap-y-16'>
    
      {posts.map((post:any)=>(
       // ^post image + some information 
        <ClientSideRoute key={post._id} route = {`/post/${post.slug.current}`}>
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
              new Date(post._updatedAt).toLocaleDateString(
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

    
      <CrashCourse crashCourse={crashCourse}/>
    
    
    
  </div>
 
  )
}

export default Homepage