"use client"
import React  , {FC}from 'react'
import {urlForSecurityCms} from '../../lib/urlFor'
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
 content : Content[],
 title : string,
 _id:string,
 _type : string,
 _updatedAt : string,
 mainImage : MainImage
 alt : string | ""

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
    console.log(crashCourse)
    try{}catch(e){}
    return (
        <div className="bg-slate-800">
          <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10  lg:grid-cols-3 xl:gap-x-8">
              {crashCourse.map((c) => (
                <div key={c._id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full h-[300px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[300px] ">
                     {/* 337*336 */}
                    <img
                      src={urlForSecurityCms(c.mainImage).url()}
                      alt={c.alt}
                      className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={""}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {c.title}
                        </a>
                      </h3>
                     
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
}

export default CrashCourse