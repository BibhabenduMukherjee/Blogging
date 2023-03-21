import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
function CustomPageComponent(props: any) {
  return (
    <div>
      {" "}
      <div className="   mt-10  hover:bg-[#1e1a16]  cursor-pointer  p-6 flex flex-col shadow-md rounded-md ">


          <div className="pl-8">
          <p className=" text-cyan-700">
          {" "}
          {new Date(props.post._updatedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="text-2xl pt-1 ">{props.post.title}</h2>
        <p className="text-md pt-1 line-clamp-1">{props.post.description}</p>
        <Link
          href={"/"}
          className=" underline mt-2 text-red-400  font-bold flex items-center group-hover:underline"
        >
          Read Post
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
          </div>

     
      </div>
    </div>
  );
}

export default CustomPageComponent;
