"use client"
import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import LoginContact from "./LoginContact"
import { StarsCanvas } from './canvas';
export const Hero = () => {



    return (

   <>
  <div className="relative bg-transparent overflow-hidden flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        
    <LoginContact />
    <StarsCanvas />
        
      </div>
   </>

    
    );
  };