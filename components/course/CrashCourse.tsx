"use client"
import React  , {FC, useEffect}from 'react'
import {urlForSecurityCms} from '../../lib/urlFor'
import Link from 'next/link'
import {useState} from "react"
const products = [
  {
    imageSrc : "https://images.unsplash.com/photo-1678314530817-68b4966f1b07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
    id : 1,
    imageAlt : "pic",
    href : "",
    name : "girls1"

},
{
    imageSrc : "https://plus.unsplash.com/premium_photo-1687826541341-eb96269ef9c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    imageAlt : "pic",
    id : 2,
    href : "",
    name : "girls1"

},
{
    imageSrc : "https://images.unsplash.com/photo-1678314529373-61e0d5309e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    id : 3,
    imageAlt : "pic",
    href : "",
    name : "girls1"

},
{
    imageSrc : "https://images.unsplash.com/photo-1678314530817-68b4966f1b07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
    id : 4,
    imageAlt : "pic",
    href : "",
    name : "girls1"

}
]

interface Content{}

interface crashCourseT{
 content : Content[] | null,
 title : string,
 _id:string,
 _type : string,
 _updatedAt : string,
 mainImage : MainImage
 

}

interface Asset{
  _ref : string,
  _type : string,


}

interface MainImage{
  _type : string,
  assets : Asset
}

 interface PageProps {
  crashCourse : crashCourseT[]

 };
  const CrashCourse : FC<PageProps> =  ({crashCourse}) =>  {
    const aa = crashCourse.slice(0,3)
    const [initialCrashCourse , setInitialCrashCourse ] = useState<crashCourseT[]>(aa);
    function clickHandle(){
      let len = crashCourse.length;
      let prevLen = initialCrashCourse.length
      const newRecords = crashCourse.slice(0, Math.max((prevLen + 3),len))
      setInitialCrashCourse(newRecords)
    }
    console.log(initialCrashCourse)
    try{}catch(e){}
    return (
        <div className="mb-[20px]">
          <div className="mx-auto max-w-xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
            <h2 className="text-xl  text-center font-mono font-bold md:text-3xl text-fuchsia-500">Explore The Best Design <span className="md:text-3xl text-orange-500">CrashCourse</span></h2>
            <hr className="w-[200px] pb-[30px] mx-auto md:w-[570px] lg:w-[650px] mb-[30px]   mt-2 h-[8px]"/>
    
            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10  lg:grid-cols-3 xl:gap-x-8">
              {initialCrashCourse.map((c) => (
                <div key={c._id} className="group relative">

                  <Link href={"/"}>
                  <div className="aspect-h-1 aspect-w-1 w-full h-[380px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[300px] ">
                     {/* 337*336 */}
                    <img
                      src={urlForSecurityCms(c.mainImage).url()}
                      alt={""}
                      className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                    />
                  </div>
                  </Link>
                  
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-xl opacity-60 text-white">
                        <a href={""}>
                          <span aria-hidden="true" className="" />
                          {c.title}
                        </a>
                      </h3>
                     
                    </div>
                   
                  </div>
                </div>
              ))}
             
            </div> 
           <div className=' max-w-4xl mt-[30px] p-2 flex items-center mx-auto'>
            
          {
            initialCrashCourse.length !== crashCourse.length ?  <button onClick={()=>{clickHandle()}} className=" hover:bg-yellow-500  mx-auto w-[150px] h-[50px] bg-yellow-400 p-3 text-black font-semibold text-lg rounded-lg">Load more</button> : ""
          }
           </div>
           
          </div>
        </div>
      )
}

export default CrashCourse