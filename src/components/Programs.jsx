import React from 'react';
import weight from "../assets/weight.jpg";
import cardio from "../assets/cardio.jpg";
import bodybuilding from "../assets/body.jpg";
import regular from "../assets/regular.jpg";
import work from "../assets/work.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Programs = ({ programsRef }) => {

    const programs = [
      { title: "BODYBUILDING", image: bodybuilding },
      { title: "REGULAR WORKOUT", image: regular },
      { title: "Stretching WORKOUT", image: work }
    ];


  return (
    <>
    {/* programs */}
    <div ref={programsRef} className='w-auto min-h-screen bg-black/90 flex flex-col'>
      {/* Heading and Description */}
      <div className='w-full h-auto mt-20 flex flex-row justify-around items-center gap-0 flex-wrap sm:flex-nowrap sm:gap-50 sm:flex-row sm:justify-around'>
        <p className='text-2xl sm:text-4xl text-white font-bold text-center sm:text-left w-full sm:w-auto mb-4 sm:mb-0'>
          PROGRAMS THAT <span className='text-[#C7FF39]'>FIT YOU</span>
        </p>
        <p className='text-[11px] sm:text-[12px] font-extralight text-white text-center sm:text-left w-full sm:w-auto'>
          Whether you are just starting or levelling up, our coaching is built around <br className='hidden sm:block' /> your needs, not a one size-fits-all plan.
        </p>
      </div>

      {/* First 2 images */}
      <div className='w-full mt-10 flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-6 sm:gap-8'>
        {/* Weight Lifting */}
        <div className='relative w-[90%] sm:w-160 h-64 sm:h-80 transition-transform duration-300 hover:scale-103'>
          <LazyLoadImage 
            src={weight}
            alt="lifting"
            effect='blur'
            className='lg:w-160 lg:h-80 w-full h-full rounded-2xl object-cover'
          />
          <p className='absolute bottom-4 left-4 text-white text-2xl sm:text-3xl font-bold'>WEIGHT LIFTING</p>
        </div>

        {/* Cardio */}
        <div className='relative w-[90%] sm:w-110 h-64 sm:h-80 transition-transform duration-300 hover:scale-103'>
          <LazyLoadImage 
            src={cardio}
            alt="cardio"
            effect='blur'
            className='w-full h-full rounded-2xl object-cover'
          />
          <p className='absolute bottom-6 left-4 text-white text-2xl sm:text-3xl font-bold'>CARDIO</p>
        </div>
    </div>

  {/* Other Programs */}
  <div className='w-full mt-10 flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-6 sm:gap-8'>
    {programs.map((program, index) => (
      <div key={index} className='relative w-[90%] sm:w-100 h-64 sm:h-70 transition-transform duration-300 hover:scale-103'>
        <LazyLoadImage 
          src={program.image}
          alt={program.title}
          effect='blur'
          className='w-full h-full rounded-2xl object-cover'
        />
        <p className='absolute bottom-4 left-4 text-white text-2xl sm:text-3xl font-bold'>
          {program.title}
        </p>
      </div>
    ))}
  </div>
</div>
</>
  )
}

export default Programs