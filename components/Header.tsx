"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { list } from "../list";
import { signOut, useSession } from "next-auth/react";
import "animate.css"
function Header() {
  const [isToggle, setIsToggle] = useState<boolean>(true);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { data: session, status } = useSession();
  //console.log(user)

  return (
    <>
    <header className="flex items-center justify-between space-x-2 font-bold px-6 py-3 md:px-10 md:py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full "
            src="/2-min.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <h1>Codeordie</h1>
      </div>

      <div className="md:hidden cursor-pointer">
        {isToggle ? (
          <div onClick={()=>{setIsToggle(false)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        ) : (
          <div onClick={()=>{setIsToggle(true)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>

     

    </header>

     {!isToggle && <div className ="" >
      
      <div className=" md:hidden rounded-xl bg-transparent flex flex-col w-[260px] animate__animated animate__bounceInRight absolute right-0 bg-slate-900 transition-all delay-75 min-h-full z-10 opacity-80 ">
     
     <div className="h-[200px] flex flex-col  w-full mx-auto ">
      {
        list.map((l)=>(
          <div key={l.id}>
          <Link href={l.ref} className="text-xl m-2 p-2 flex flex-col space-y-4 hover:text-yellow-300 text-left ml-[30px]">
             {l.title}
        </Link>
          </div>
        ))
      }
    
       
     </div>

    
       
  
      
      </div>
      </div>} 
    


    </>
  );
}

export default Header;
