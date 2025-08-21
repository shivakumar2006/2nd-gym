import React from 'react';
import trainer from "../assets/trainer.jpg";
import { BsStopwatchFill } from "react-icons/bs";
import { GiHeartBeats } from "react-icons/gi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdOutlineDirectionsRun } from "react-icons/md";
import { MdLocalFireDepartment } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Tainer = () => {

  const cards = [
    {
      name: "BPM",
      value: "95",
      logo: <GiHeartBeats className=' text-3xl text-[#C7FF39] group-hover:text-purple-700 group-hover:text-4xl'/>
    },
    {
      name: "STEPS",
      value: "1024",
      logo: <MdOutlineDirectionsRun className=' text-3xl text-[#C7FF39] group-hover:text-purple-700 group-hover:text-4xl'/>
    },
    {
      name: "Kcal",
      value: "550",
      logo: <MdLocalFireDepartment  className=' text-3xl text-[#C7FF39] group-hover:text-purple-700 group-hover:text-4xl'/>
    },
    {
      name: "SETS",
      value: "5",
      logo: <LuDumbbell className=' text-3xl text-[#C7FF39] group-hover:text-purple-700 group-hover:text-4xl'/>
    }
  ]

  return (
        <>
            {/* trainers */}
    <div className='w-auto min-h-screen bg-black/90 flex flex-col'>
        <div className="w-full h-auto mt-20 flex lg:flex-row flex-col sm:flex-row justify-around items-center gap-6 sm:gap-50 text-center sm:text-left">
          <p className="text-4xl text-white font-bold order-1">
            TEAM OF <span className="text-[#C7FF39]">EXPERT COACHES</span>
          </p>
          <p className="text-[12px] font-extralight text-white order-2">
            The best way to start your day. Structured, powerful practice that focuses on <br className="hidden sm:block" /> 
            masters of poses and progression to more advanced levels.
          </p>
        </div>

       <div className="w-full flex justify-center items-center mt-20">
        {/* Desktop/Laptop View */}
        <div className="hidden sm:flex group relative w-80 h-80 bg-white rounded-3xl overflow-hidden transition-all duration-700 hover:w-[46rem] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] items-center cursor-pointer border border-gray-200">

          {/* Soft Glow Border on Hover */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl">
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 opacity-30"></div>
          </div>

          {/* Image Section */}
          <div className="z-10 flex-shrink-0 transition-all duration-700 ease-in-out group-hover:scale-[1.05] group-hover:translate-x-[-1rem]">
            <LazyLoadImage
              src={trainer}
              alt="Trainer"
              effect="blur"
              className="w-80 h-80 object-cover rounded-3xl shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="z-10 w-0 opacity-0 group-hover:w-[25rem] group-hover:opacity-100 transition-all duration-700 ease-in-out px-8 text-black">
            <h2 className="text-3xl font-extrabold mb-2 tracking-wide">ASHOK SAINI</h2>
            <p className="text-md font-normal mb-4 italic text-gray-700">21 years • Trainer</p>
            <p className="text-base leading-relaxed text-gray-800 font-medium space-y-1">
              🏋️ Powerlifter, Indian Team 🇮🇳<br />
              🥈 National Silver Medalist (2024)<br />
              🦾 Jr Strongman, State Champion<br />
              🏆 Hardcore Training + Mentorship
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex sm:hidden flex-col items-center bg-white rounded-3xl shadow-md border border-gray-200 w-80 p-4">
          <LazyLoadImage
            src={trainer}
            alt="Trainer"
            effect="blur"
            className="w-72 h-72 object-cover rounded-3xl shadow-md"
          />
          <div className="mt-4 text-center text-black">
            <h2 className="text-2xl font-extrabold mb-1 tracking-wide">ASHOK SAINI</h2>
            <p className="text-sm font-normal mb-2 italic text-gray-700">21 years • Trainer</p>
            <p className="text-sm leading-relaxed text-gray-800 font-medium">
              🏋️ Powerlifter, Indian Team 🇮🇳<br />
              🥈 National Silver Medalist (2024)<br />
              🦾 Jr Strongman, State Champion<br />
              🏆 Hardcore Training + Mentorship
            </p>
          </div>
        </div>
      </div>
          <div className='w-full mt-20 flex justify-center items-center md:gap-20 mb-20 md:mb-0 gap-5'>
            {cards?.map((item, index) => (
              <div key={index} className='md:w-30 w-20 h-30 md:h-40 rounded-3xl border border-gray-400 hover:border-black flex flex-col items-center justify-center gap-3 hover:bg-white hover:text-black transition-transform duration-300 hover:scale-110 group'>
                  {item.logo}
                  <p className='text-white font-bold text-xl md:text-2xl group-hover:text-black'>{item.value}</p>
                  <p className='text-xl md:text-2xl font-bold text-gray-400'>{item.name}</p>
              </div>
            ))}
          </div>
    </div>
    </>
  )
}

export default Tainer