"use client"

import { ArrowRightIcon } from '@heroicons/react/24/solid'
import "../styles/styles.css"
import {paginate} from "../utills/paginate"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { client } from '../lib/sanity.client'

import Pagination from "./Pagination"
import ClientSideRoute from './ClientSideRoute'






function BlogDsList() {
  
  const [items, setItems] = useState([]);
  const [currentPage , setCurrentPage] = useState(1)
  const [loading , setLoading] = useState(false)
  const [pageSize , setPageSize] = useState(10)

  useEffect(() => {
    setLoading(true)
    client.fetch(`
    *[_type == 'post' && topic =='ds']{
      ...,
      author->,
      categories[]->
    } | order(_createdAt )
    `).then(res => {
      setItems(res)
      setLoading(false)
    });
  }, []);

  const handelPage = (page) =>{
    setCurrentPage(page)
  }
 const paginatePosts = paginate(items , currentPage,pageSize )
  return (
    <div className="">
    
     {
      loading ? <div className='text-center text-red-600 animate-pulse'>loading...</div> : <>
      {paginatePosts.map((post) => (

<ClientSideRoute route= {`/ds/${post.slug.current}`}>
<div key={post._id} className='  mt-5 pl-12 cursor-pointer hover:bg-[#1e1a16]  p-4 flex flex-col shadow-md rounded-md  '>
<p className=' text-cyan-700 p-2'> {new Date(post._updatedAt).toLocaleDateString("en-IN" , {
                         day : "numeric",
                         month: "long",
                         year : "numeric"
                       })}</p>
<h2 className='text-2xl pt-2'>{post.title}</h2>
<p className='text-md pt-2 line-clamp-1'>{post.description}</p>
<Link href={"/"} className = '  text-red-400 underline mt-3  font-bold flex items-center group-hover:underline'
>
Read Post
<ArrowRightIcon className = 'ml-2 h-4 w-4'/>
</Link>
</div>
</ClientSideRoute>


))}




<Pagination 

items={items.length}
currentPage = {currentPage}
pageSize = {pageSize}
onPageChange = {handelPage}
/>

      </>
     }
    
   
    
    
  </div>
  )
}



export default BlogDsList






