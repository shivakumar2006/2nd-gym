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
            <div className='w-full h-20 bg-purple-800 -rotate-4 z-0'>
                <div className='w-full h-20 rotate-6 z-50 bg-black flex flex-row justify-center items-center gap-3'>
                    <p className='text-4xl font-extrabold text-[#C7FF39]'>Elevate. Conquer. Thrive. </p>
                    <p className='text-6xl font-extrabold mt-4 text-[#C7FF39]'>*</p>
                    <p className='text-4xl font-extrabold text-[#C7FF39]'> Elevate. Conquer. Thrive. </p>
                    <p className='text-6xl font-extrabold mt-4 text-[#C7FF39]'>*</p>
                    <p className='text-4xl font-extrabold text-[#C7FF39]'> Elevate. Conquer. Thrive. </p>
                </div>
            </div>

            <div className='w-full mt-35 flex flex-col items-center'>
                <p className='text-7xl text-white font-extrabold'>
                    Sculpt your{" "}
                    <span className='w-40 px-8 h-15 rounded-4xl border border-white font-extralight text-[#C7FF39]/80'>
                    {word}
                    </span>{" "}
                    : Fitness
                </p>
                <div className='w-full flex flex-row justify-center mt-7 items-center gap-4'>
                    <LiaDumbbellSolid className='w-20 h-20 rounded-2xl bg-[#C7FF39]'/> 
                    <p className='text-7xl text-white font-extrabold'>Excellence Begins Here.</p>
                </div>
                <p className='text-[#C7FF39]/50 mt-10'>Explore the diversity of fitness</p>
                <div className='w-50 h-50 rounded-full mt-15 border border-[#C7FF39] flex justify-center items-center'>
                    <FaArrowDownLong className='text-[#C7FF39]/50 text-8xl'/>
                </div>
            </div>  
        </div>
    </>
  )
}

export default Start