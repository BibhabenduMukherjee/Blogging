"use client"
function Banner() {
  return (
    <div className="flex flex-col justify-between lg:flex-row lg:space-x-5 px-10 py-5 mb-10">
        <div className="">
    <h1 className='text-7xl mt-2'>Hello Learners</h1>
    <h2 className='mt-5 md:mt-0'>
        Wellcome to{" "}
        <span className='text-lg p-2 underline decoration-4 decoration-[#F7AB0A]'>Every Developers</span>{" "}
        
        to the creator world | make content | make new world
    </h2>
    </div>
    

 <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>New products  | new features | new learning | easy
 </p>
 </div>
  )
}

export default Banner