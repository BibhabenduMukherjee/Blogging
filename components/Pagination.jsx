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
    <div className='flex items-center m-6  border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
        <nav className=" p-2 max-w-5xl mx-auto  -space-x-px rounded-md shadow-sm">
  
        <button className={currentPage == 1 ? "hidden" : "p-2 w-[100px] bg-yellow-400 text-center text-black m-2 font-bold hover:bg-yellow-300 rounded-md "}  onClick={() => {  onPageChange(currentPage-1)}}>Prev</button>
       <button  className= {currentPage == pageCount ? "hidden" : "p-2 w-[100px] bg-yellow-400 text-center text-black m-2 font-bold hover:bg-yellow-300 rounded-md "} onClick={() => {  onPageChange(currentPage+1)}}>Next</button>


  {/* {pages.map((page) => (
           <div  key={page} className="inline-flex ">
           <a
               
                style={{ cursor: "pointer"  }}

                onClick={() => onPageChange(page)}
                className= {page === currentPage ?  "   border border-indigo-500 bg-indigo-50 px-4 py-2 text-md font-medium text-indigo-600 focus:z-20" : " border border-gray-300 bg-white px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
              >
                {page}
              </a>
           </div>
             
          
          ))} */}
  
</nav>
    </div>
  )
}

export default Pagination
