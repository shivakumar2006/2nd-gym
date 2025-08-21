import React, { useState, useEffect } from 'react';
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaArrowDownLong } from "react-icons/fa6";

const Start = () => {

    const [ word, setWord ] = useState("future");

    useEffect(() => {
        const words = [ "future", "body" ];
        let index = 0; 

        const interval = setInterval(() => {
            index = (index + 1) % words.length;
            setWord(words[index])
        }, 3000) 

        return () => clearInterval(interval);
    }, [])

  return (
    <>
    <div className='w-full min-h-screen bg-[#1D1F20]'>
  
  {/* Top rotated banner */}
  <div className='w-full md:h-20 h-15 bg-purple-800 -rotate-4 z-0'>
   <div className='w-full md:h-20 h-15 rotate-6 z-50 bg-black flex flex-wrap md:flex-nowrap flex-row justify-center items-center gap-2 md:gap-3'>
  {/* Mobile: only this shows */}
  <p className='block md:hidden text-2xl font-extrabold text-[#C7FF39]'>
    Elevate. Conquer. Thrive.
  </p>

  {/* Desktop: these only show on md+ */}
  <p className='hidden md:block text-2xl md:text-4xl font-extrabold text-[#C7FF39]'>
    Elevate. Conquer. Thrive.
  </p>
  <p className='hidden md:block text-4xl md:text-6xl font-extrabold mt-1 md:mt-4 text-[#C7FF39]'>*</p>
  <p className='hidden md:block text-2xl md:text-4xl font-extrabold text-[#C7FF39]'>
    Elevate. Conquer. Thrive.
  </p>
  <p className='hidden md:block text-4xl md:text-6xl font-extrabold mt-1 md:mt-4 text-[#C7FF39]'>*</p>
  <p className='hidden md:block text-2xl md:text-4xl font-extrabold text-[#C7FF39]'>
    Elevate. Conquer. Thrive.
  </p>
</div>

  </div>

  {/* Hero Content */}
  <div className='w-full mt-10 md:mt-35 flex flex-col items-center px-4 md:px-0'>
    
    <p className='text-3xl md:text-7xl text-center text-white font-extrabold'>
      Sculpt your{" "}
      <span className='w-28 md:w-60 px-4 md:px-8 h-10 md:h-20 rounded-3xl md:rounded-4xl border border-white font-extralight text-[#C7FF39]/80 inline-block text-center'>
        {word}
      </span>{" "}
      : Fitness
    </p>

    <div className='flex flex-col md:flex-row justify-center items-center mt-4 md:mt-7 gap-4 md:gap-4'>
      <LiaDumbbellSolid className='w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#C7FF39]'/> 
      <p className='text-3xl md:text-7xl text-center md:text-left text-white font-extrabold'>
        Excellence Begins Here.
      </p>
    </div>

    <p className='text-sm md:text-[#C7FF39]/50 mt-4 md:mt-10 text-center md:text-center'>
      Explore the diversity of fitness
    </p>

    <div className='w-24 h-24 md:w-50 md:h-50 rounded-full mt-6 md:mt-15 border border-[#C7FF39] flex justify-center items-center pb-[-100px]'>
      <FaArrowDownLong className='text-5xl md:text-8xl text-[#C7FF39]/50'/>
    </div>

  </div>
</div>

    </>
  )
}

export default Start