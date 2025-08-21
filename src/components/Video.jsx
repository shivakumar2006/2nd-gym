import React, { useState, useRef } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import equipment from "../assets/equipment.mp4";
import { FaPlay, FaTimes } from "react-icons/fa";

const Video = () => {

    const videoRef = useRef(null);
    const [ showControls, setShowControls ] = useState(false);
    const [ fullscreen, setFullscreen ] = useState(false);

    const handleMouseEnter = () => {
        if (!showControls && !fullscreen) {
            videoRef.current.play();
        }
    }

    const handleMouseLeave = () => {
        if (!showControls && !fullscreen) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; 
        }
    }

    const handlePlayClick = () => {
        setFullscreen(true); // fullscreen modal open
    }

    const closeFullscreen = () => {
        setFullscreen(false);
    }

  return (
    <div className='w-full min-h-screen bg-black/90'>
        {/* Heading */}
        <div className='w-full pt-20 md:pl-20 pl-13 flex flex-row gap-5'>
            <div className='md:w-30 md:h-15 w-20 h-10 rounded-4xl bg-[#C7FF39] flex flex-row justify-center items-center text-5xl gap-0'>
                <IoMdArrowDropright />
                <IoMdArrowDropright />
                <IoMdArrowDropright />
                <IoMdArrowDropright />
            </div>
            <p className='text-white text-3xl md:text-5xl mt-1 font-extrabold'>Our Equipment</p>
        </div>

        {/* Description */}
        <p className='text-white md:text-3xl text-xl mt-10 px-20 font-bold'>
            Experience peak performance with state-of-the-art equipment at The Fitness Factory, where our cutting-edge fitness <br /> 
            gear is meticulously curated to elevate your workout and maximize results. 
        </p>

        {/* Video Card */}
        <div className='w-full flex flex-row justify-center mt-20 md:pr-50 pb-10 items-center'>
            <div 
                className='md:w-175 md:ml-[-370px] w-90 h-50 rounded-3xl md:h-99 shadow-xl relative group'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video 
                    ref={videoRef}
                    src={equipment}
                    className='object-contain w-full h-full rounded-3xl'
                    muted
                />

                {/* play button overlay */}
                {!fullscreen && (
                    <button 
                        className='absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition rounded-3xl cursor-pointer'
                        onClick={handlePlayClick}
                    >
                        <FaPlay className='text-[#C7FF39] text-6xl'/>
                    </button>
                )}
            </div>
        </div>

        {/* Fullscreen Modal */}
        {fullscreen && (
            <div className='fixed inset-0 bg-black/90 flex justify-center items-center z-50'>
                <div className='relative w-4/5 h-4/5'>
                    <video 
                        src={equipment} 
                        controls 
                        autoPlay 
                        className='w-full h-full rounded-2xl object-contain'
                    />
                    <button 
                        className='absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black/80'
                        onClick={closeFullscreen}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Video;
