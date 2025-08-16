import React, { useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {

    const blogsRef = useRef(null);

    const blogs = [
        { 
            description: "I’ve tried many gyms before, but nothing compares to this one. The atmosphere is super motivating, and the trainers actually care about your progress. In just 3 months, I lost 8 kg and built visible muscle. Highly recommended!",
            name: "Rajat Singh",
        },
        {
            name: "Sneha Nair",
            description: "As someone who was new to fitness, I was nervous to even join a gym. But the support and guidance I got here changed everything. The sessions are not just effective—they’re fun! I feel stronger, more confident, and more energetic than ever.",
        },
        {
            name: "Kunal Mehta",
            description: "The customized workout and diet plan really worked for me. I started seeing changes within 2 weeks. It’s not just a gym, it’s a whole transformation system. Totally worth every rupee!",
        },
        {
            name: "Priya Sharma",
            description: "From the moment I walked in, I felt welcomed. The community is super friendly, and the trainers push you just the right amount. I’ve never felt this consistent with fitness before. Proud to call this my second home!",
        },
    ]

  return (
    <div className='w-full bg-black/90'>
        {/* tstimonials */}
          {/* Hide this part on mobile */}
        <div 
          ref={blogsRef} 
          className="hidden md:flex w-full pt-20 flex-col"
        >
          <p className="text-[130px] ml-30 font-extrabold text-white tracking-tight">
            +<span className="text-[#C7FF39]">+</span>
          </p>
        </div>

        {/* This shows on all devices */}
        <div 
          className="w-full h-auto flex flex-col mt-20 lg:mt-0 md:flex-row justify-around items-center gap-5 md:gap-50"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl ml-0 md:ml-20 text-white font-bold text-center md:text-left">
            WHAT ARE CUSTOMERS SAY: REAL <br className="hidden md:block" /> 
            RESULTS, <span className="text-[#C7FF39]">REAL VALUE!</span>
          </p>

          <p className="text-[12px] font-extralight text-white text-center md:text-left mt-4 md:mt-0 px-4 lg:mr-20 md:px-0">
            Starting your day with a strong routine can transform your life. Engaging in a <br className="hidden md:block" /> 
            focused and dynamic practice not only enhances your mastery of poses but <br className="hidden md:block" /> 
            also paves the way for tackling more advanced techniques.
          </p>
        </div>

        <div className="w-full mt-10 flex justify-center items-center">
          <div className="w-full max-w-7xl rounded-2xl overflow-x-auto scroll-smooth flex flex-nowrap gap-4 px-4 pb-4 no-scrollbar">
            {/* Testimonial Cards */}
            {blogs?.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] lg:min-w-[550px] bg-white/10 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col justify-between text-white"
              >
                {/* Testimonial Text */}
                <div className="w-full">
                  <p className="text-sm sm:text-base font-medium leading-relaxed break-words whitespace-normal">
                    {item.description}
                  </p>
                </div>
            
                {/* User Info */}
                <div className="flex items-center justify-start gap-3 mt-4">
                  <FaUserCircle className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                  <span className="text-xs sm:text-sm text-white/80 font-semibold">
                    — {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Testimonials