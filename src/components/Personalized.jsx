import React from 'react';
import consult from "../assets/consult.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Personalized = () => {

    const cards = [
        { number: "50", title: "Training Programs"},
        { number: "10", title: "Years of experience"},
        { number: "100", title: "Happy Members"},
        { number: "20", title: "Best Trainers"},
    ]

  return (
    <div className='w-full pt-2 md:pt-0 bg-black/90'>
        {/* personalized workout */}
          <div className="w-full flex mt-10 sm:pt-30 sm:mt-0 justify-center items-center px-4">
            <div className="relative w-full max-w-[920px] aspect-[16/9] rounded-2xl flex justify-center items-center">
              <LazyLoadImage
                src={consult}
                alt="consult"
                effect="blur"
                className="w-full h-full opacity-60 rounded-2xl object-cover"
                wrapperClassName="w-full h-full rounded-2xl opacity-60"
              />

              {/* Centered overlay */}
              <div className="absolute inset-0 z-50 text-white flex flex-col justify-center items-center text-center gap-4 p-4">
                <p className="text-lg sm:text-2xl md:text-4xl font-extrabold leading-snug">
                  PERSONALIZED WORKOUT PLANS <br />
                  <span className="text-[#C7FF39]">ACHIEVE </span> YOUR GOALS.
                </p>

                <p className="text-[10px] sm:text-xs md:text-sm font-extralight max-w-[90%] sm:max-w-[80%]">
                  Highlight customization and goal achievement, which can be enticing for
                  those looking for tailored fitness solutions.
                </p>

                <button
                  className="lg:w-30 lg:h-13 px-4 py-2 rounded-2xl text-black bg-[#C7FF39] text-xs sm:text-sm font-light flex justify-center items-center cursor-pointer"
                  onClick={() => scrollToSection(contactRef)}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

        <div className="w-full mt-10 sm:mt-15 flex justify-center items-center px-4">
          <div className="w-full max-w-5xl flex flex-wrap justify-center sm:justify-between items-center gap-4 mb-10 md:mb-0">
            {cards?.map((item, index) => (
              <div
                key={index}
                className="flex-1 min-w-[140px] max-w-[180px] h-28 rounded-2xl bg-white/10 flex flex-col justify-center items-center gap-2"
              >
                <p className="text-white text-2xl sm:text-4xl font-extrabold">
                  {item.number}
                  <span className="text-sm sm:text-md font-extrabold">+</span>
                </p>
                <p className="text-white font-extralight text-[10px] sm:text-xs text-center px-1">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Personalized;