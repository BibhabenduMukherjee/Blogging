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
  
        <button className={currentPage == 1 ? "cursor-not-allowed p-2 w-[100px] bg-yellow-200 text-center text-black m-2   rounded-md  " : "p-2 w-[100px] bg-yellow-400 text-center text-black m-2 font-bold hover:bg-yellow-300 rounded-md "}  onClick={() => { if(currentPage == -1){return}; onPageChange(currentPage-1)}}>Prev</button>
       <button  className= {currentPage == pageCount ? "cursor-not-allowed p-2 w-[100px] bg-yellow-200 text-center text-black m-2  rounded-md " : "p-2 w-[100px] bg-yellow-400 text-center text-black m-2 font-bold hover:bg-yellow-300 rounded-md "} onClick={() => { if(currentPage > pageCount){return}; onPageChange(currentPage+1)}}>Next</button>


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


// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//       <div className="flex flex-1 justify-between sm:hidden">
//         <a
//           href="#"
//           className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//         >
//           Previous
//         </a>
//         <a
//           href="#"
//           className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//         >
//           Next
//         </a>
//       </div>
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//         <div>
//           <p className="text-sm text-gray-700">
//             Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
//             <span className="font-medium">97</span> results
//           </p>
//         </div>
//         <div>
//           <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
//             >
//               <span className="sr-only">Previous</span>
//               <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//             {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
//             <a
//               href="#"
//               aria-current="page"
//               className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
//             >
//               1
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
//             >
//               2
//             </a>
//             <a
//               href="#"
//               className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
//             >
//               3
//             </a>
//             <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
//               ...
//             </span>
//             <a
//               href="#"
//               className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
//             >
//               8
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
//             >
//               9
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
//             >
//               10
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
//             >
//               <span className="sr-only">Next</span>
//               <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   )
// }
