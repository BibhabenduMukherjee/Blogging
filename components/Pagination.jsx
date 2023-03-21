"use client"
import React from 'react'
import _ from "lodash"
import "../styles/globals.css"
function Pagination({items , pageSize  , currentPage , onPageChange}) {
    const pageCount =  Math.ceil(items / pageSize)
    //console.log(pageCount)
    if(Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1,pageCount+1)
  return (
    <div className='  flex items-center m-6  border-t border-gray-200 bg-[#1B1713] px-4 py-3 sm:px-6'>
        <nav className=" p-2 max-w-5xl mx-auto  -space-x-px rounded-md shadow-sm">
  
        <button className={currentPage == 1 ? "hidden" : "p-2 w-[100px] bg-yellow-400 text-center text-black m-2 font-bold hover:bg-yellow-300 rounded-md "}  onClick={() => {  onPageChange(currentPage-1)}}>Prev</button>
       <button  className= {currentPage == pageCount ? "hidden" : "p-2 w-[100px] bg-yellow-400 text-center text-black m-2 font-bold hover:bg-yellow-300 rounded-md "} onClick={() => {  onPageChange(currentPage+1)}}>Next</button>

  
</nav>
    </div>
  )
}

export default Pagination
