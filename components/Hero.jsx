"use client"
import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import {useState , useEffect} from "react"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image';
var validator = require("email-validator");
export const Hero = () => {

   const [name , setName] = useState("");
   const [email , setEmail] = useState("");
   const [flg , setFlg] = useState(false)
   const [flgemail , setFlgMail] = useState(false)
   const [nameLen , setNameLen] = useState(false)
   const [processing , setProcessing ] = useState(false)
   const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
    });
  };

  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
    });
  };

//    useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [ ])
   function submitHandler(e){
    e.preventDefault()
   
    if(email === "" || name === ""){
      setFlg(true)
      return
     } 

     if(name.length > 30) {
      setNameLen(true);
      return;
    }

    if(!validator.validate(email)){
      setFlgMail(true)
      return
     }
     
     setProcessing(true)
   axios.post(`https://userfeedbackapp.cyclic.app/submit` , 
       {
         name,
         email,
        
      },
      {
        headers : {
          "Content-Type": "application/json",
          
       
        }
        
      },
       
     
      ).then((res)=>{
        setProcessing(false)
        showSuccessToast(`Thank you 🚀 for your interest `);
        setName("")
        setEmail("")
        
      }).catch((err) => {
        
        setProcessing(false)
        setName("")
        setEmail("")
        showErrorToast("To many request please slow down");
      })
      // setPro(false)
      // showSuccessToast(`Thank you 🚀 !`);

      // console.log(response);
  
  
    

   }

    return (



   <>
   <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  <div className="relative overflow-hidden flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-10 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <Image
            src= {"/123.webp"}
            className="object-cover object-right w-[400px] h-auto lg:w-auto lg:h-full"
            alt=""
            width={470}
            height={400}
            priority
          />
        </div>
        <div className="relative flex justify-end max-w-2xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16  lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6 md:ml-16 ">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Codelify@team
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Let's  bring your 
                <br className="hidden md:block" />
                Thoughts{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  online
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Embrace the adventure of life and let your 
              ideas be the compass that guides you towards your unique destination.
              join with us | share your ideas
              </p>
            </div>
            <form className='md:ml-16'>
          { flg && <p className='text-red-500 font-semibold  pl-1 animate-pulse'>*All field is required</p>}
          {flgemail &&  <p className='text-red-500 font-semibold  pl-1 animate-pulse'>*Provide proper email</p>}
          {nameLen &&  <p className='text-red-500 font-semibold  pb-2 pl-1 animate-pulse'>*Name should be within 30 character</p> }
              <div className="flex flex-col md:flex-row">
                <input
                  placeholder="Name"
                  required=""
                  type="text"
                  onPaste={(e) => {
                  e.preventDefault();
                  return false;
                  }}
                  value={name}
                  onChange = {(e)=>{setName(e.target.value) ; setFlg(false) ; setFlgMail(false) ; setNameLen(false)}}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <input
                  placeholder="Email"
                  onPaste={(e) => {
                  e.preventDefault();
                  return false;
        }}
                  required=""
                  type="text"
                  value={email}
                  onChange = {(e)=>{setEmail(e.target.value);  setFlg(false) ; setFlgMail(false) ; setNameLen(false)}}
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center mt-4 space-x-3">
                {/* <button
                  
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button> */}
                <button onClick={submitHandler} className=  { processing ? " animate-pulse inline-flex items-center h-12 px-6 font-medium text-white bg-purple-500 rounded shadow-md focus:shadow-outline   focus:outline-none"  : "inline-flex items-center h-12 px-6 font-medium text-white hover:bg-purple-600 bg-purple-700 rounded shadow-md focus:shadow-outline   focus:outline-none" }   >{processing ? "Submitting" : "Get In Touch"}</button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
   </>

    
    );
  };