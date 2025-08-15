import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const Video = () => {
  return (
    <div className='w-full min-h-screen bg-black/90'>
        <div className='w-full pt-10 ml-20 flex flex-row gap-5'>
            <div className='w-30 h-15 rounded-4xl bg-[#C7FF39] flex flex-row justify-center items-center text-5xl gap-0'>
                <IoMdArrowDropright />
                <IoMdArrowDropright />
                <IoMdArrowDropright />
                <IoMdArrowDropright />
            </div>
            <p className='text-white text-5xl mt-1 font-extrabold'>Our Equipment</p>
        </div>
    </div>
  )
}

export default Video