"use client"

import { ArrowRightIcon } from '@heroicons/react/24/solid'
import "../styles/styles.css"
import {paginate} from "../utills/paginate"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { client } from '../lib/sanity.client'

import Pagination from "./Pagination"


const itemsToSend= [];



function BlogDsList() {
  
  const [items, setItems] = useState([]);
  const [currentPage , setCurrentPage] = useState(1)
  const [pageSize , setPageSize] = useState(6)

  useEffect(() => {
    client.fetch(`
    *[_type == 'post' && topic =='ds']{
      ...,
      author->,
      categories[]->
    } | order(_createdAt )
    `).then(res => {
      setItems(res)
    });
  }, []);

  const handelPage = (page) =>{
    setCurrentPage(page)
  }
 const paginatePosts = paginate(items , currentPage,pageSize )
  return (
    <div className="">
    

    
    <div className="">
      {paginatePosts.map((post) => {
        return <div key={post._id} className='mt-5 pl-8 cursor-pointer hover:bg-gray-200 p-2 flex flex-col shadow-md rounded-md bg-gray-100 '>
  <p className='  font-serif'>{post._updatedAt}</p>
  <h2 className='text-3xl pt-2'>{post.title}</h2>
  <p className='text-lg pt-2 line-clamp-1'>{post.description}</p>
  <Link href={"/"} className = ' underline mt-5  font-bold flex items-center group-hover:underline'
  >
   Read Post
   <ArrowRightIcon className = 'ml-2 h-4 w-4'/>
  </Link>
 </div>;
      })}
    </div>

    <Pagination 

      items={items.length}
      currentPage = {currentPage}
      pageSize = {pageSize}
      onPageChange = {handelPage}
    />
   
  </div>
  )
}



export default BlogDsList






