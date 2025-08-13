import React, { useRef} from 'react';
import { CgGym } from 'react-icons/cg';
import { GiGymBag } from "react-icons/gi";
import gym from "../assets/gym2.png";
import { BsStopwatchFill } from "react-icons/bs";
import { MdLocalFireDepartment } from "react-icons/md";
import { MdOutlineDirectionsRun } from "react-icons/md";



const Home = () => {

     const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const programsRef = useRef(null);
    const pricingRef = useRef(null); 
    const blogsRef = useRef(null);
    const contactRef = useRef(null);
    const getInTouch = useRef(null);

  return (
    <div className='w-full min-h-screen'
        style={{background: "radial-gradient(circle,rgba(71, 69, 69, 1) 0%, rgba(0, 0, 0, 1) 57%, rgba(0, 0, 0, 1) 100%)"}}
    >
        {/* navbar  */}
        <div className='w-full pt-8 flex justify-center items-center px-4 sm:px-0'>
                <div className='w-full max-w-7xl h-22 rounded-2xl flex justify-between items-center px-6 sm:px-10 relative'>
                    {/* Logo */}
                    <div className='flex text-center items-center gap-4'>
                        <GiGymBag className='text-[#C7FF39] text-5xl' />
                        <div className='h-20 flex flex-col justify-center items-center'>
                        <p className='text-sm text-white font-bold'>THE</p>
                        <p className='text-white text-2xl sm:text-3xl font-bold'>FITNESS</p>
                        <p className='text-white text-lg'>FACTORY</p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className=' hidden lg:flex items-center gap-8'>
                        {[
                            { name: "Home", ref: homeRef },
                            { name: "About", ref: aboutRef },
                            { name: "Programs", ref: programsRef },
                            { name: "Pricing", ref: pricingRef },
                            { name: "Testimonials", ref: blogsRef },
                        ].map((item, index) => (
                            <p
                                key={index}
                                className='text-white font-extralight text-sm lg:mr-[40px] cursor-pointer hover:text-[#C7FF39]'
                                onClick={() => scrollToSection(item.ref)}
                            >
                                {item.name}
                            </p>
                        ))}
                        <button
                            className=' h-12 px-4 py-2 border border-white text-white text-sm font-light rounded-xl cursor-pointer'
                            onClick={() => scrollToSection(contactRef)}
                        >
                            Contact US
                        </button>
                        <button
                            className='h-12 px-4 py-2 bg-[#C7FF39] text-black text-sm font-medium rounded-xl cursor-pointer'
                            onClick={() => scrollToSection(getInTouch)}
                        >
                            Get in Touch
                        </button>
                </div>
                </div>
        </div>

        {/* home */}
        <div className='w-full mt-15 text-center text-white font-bold text-8xl flex items-center justify-center'>
            <p>Sculpt <span className='text-[#C7FF39]'>Your</span> Body <br /> Elevate Your <span className='text-[#C7FF39]'>Spirit</span></p>
        </div>

        {/* hero image section */}
        <div className='w-full h-110 mt-2 flex justify-center items-center'>
            <div className='w-60 h-110 flex flex-col justify-around items-center'>
                <div className='w-30 h-35 border border-gray-400 -rotate-12 shadow-xl ml-50 rounded-2xl bg-white/30 flex flex-col justify-center items-center'>
                        <BsStopwatchFill className=' text-3xl text-[#C7FF39]'/>
                        <p className='text-2xl font-light text-white'>Hours</p>
                        <p className='text-white font-bold text-2xl'>1.5</p>
                </div>
                <div className='w-30 h-35 border border-gray-400 -rotate-12 shadow-xl ml-50 rounded-2xl bg-white/30 flex flex-col justify-center items-center'>
                        <MdLocalFireDepartment className=' text-3xl text-[#C7FF39]'/>
                        <p className='text-2xl font-light text-white'>Kcal</p>
                        <p className='text-white font-bold text-2xl'>550</p>
                </div>
            </div>
            <img 
                src={gym}
                alt='hero'
                className='mb-42 w-120'
            />
            <div className='w-60 h-110 flex flex-col justify-around items-center'>
                <div className='w-30 h-35 border border-gray-400 rotate-12 shadow-xl mr-50 rounded-2xl bg-white/30 flex flex-col justify-center items-center'>
                        <MdOutlineDirectionsRun className=' text-3xl text-[#C7FF39]'/>
                        <p className='text-2xl font-light text-white'>Poses</p>
                        <p className='text-white font-bold text-2xl'>20</p>
                </div>
                <div className='w-30 h-35 border border-gray-400 rotate-12 shadow-xl mr-50 rounded-2xl bg-white/30 flex flex-col justify-center items-center'>
                        <MdLocalFireDepartment className=' text-3xl text-[#C7FF39]'/>
                        <p className='text-2xl font-light text-white'>Kcal</p>
                        <p className='text-white font-bold text-2xl'>550</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;