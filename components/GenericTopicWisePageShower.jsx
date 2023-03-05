"use client"

import "../styles/styles.css"
import {paginate} from "../utills/paginate"
import React, { useEffect, useState } from 'react'
import Pagination from "./Pagination"
import CustomList from './ListShow/CustomList'
import CustomPageComponent from './CustomPageComponent'
function GenericTopicWisePageShower(props) {

    const [currentPage , setCurrentPage] = useState(1)
    const [items , setItems] = useState([])
    const [pageSize , setPageSize] = useState(props.totalPageToShow)
    const handelPage = (page) =>{
        setCurrentPage(page)
      }  
        useEffect(()=>{
            setItems(props.post)
        },[])

     const paginatePosts = paginate(items , currentPage,pageSize )
     
  return (
    <div>
         
    <div className="">
      {paginatePosts.map((post) => (

     <CustomList route = {`/${props.resource}/${post.slug.current}`}>
     <CustomPageComponent post = {post}/>
     </CustomList>

      ))}
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

export default GenericTopicWisePageShower