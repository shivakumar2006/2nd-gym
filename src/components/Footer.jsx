import React from 'react';
import { GiGymBag } from "react-icons/gi";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Footer = ({ getInTouch }) => {

  return (
    <div className='w-full bg-black/90'>
        {/* Footer */}
        <div
          ref={getInTouch}
          className="w-full mt-50 lg:mt-0 flex flex-col justify-center items-center px-4 md:px-0"
        >
          <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
            {/* Logo & Description */}
            <div className="w-full md:w-70 h-auto flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left">
              <div className="w-auto h-auto flex flex-row justify-center md:justify-start items-center gap-2">
                <GiGymBag className="text-[#C7FF39] text-5xl" />
                <div className='h-20 flex flex-col justify-center items-center'>
                        <p className='text-sm text-white font-bold'>THE</p>
                        <p className='text-white text-2xl sm:text-3xl font-bold'>FITNESS</p>
                        <p className='text-white text-lg'>FACTORY</p>
                        </div>
                {/* <p className="text-white text-3xl font-bold">PROFITNESS</p> */}
              </div>
              <p className="text-white font-extralight text-[10px] max-w-xs md:max-w-none">
                Ready to boost your fitness? join us for <br />
                personalized training plans and expert guidance. <br />
                we're here to help you achieve your goals!
              </p>
              <div className="w-full flex flex-row justify-center md:justify-start items-center gap-3">

                <a href='https://www.instagram.com/godvenus98?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                    target='_blank'
                    rel='noopener noreferer'
                  >
                <div className="rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer">
                    <SiInstagram className="text-xl" />
                </div>
                </a>

                <a href='https://www.youtube.com/@shivakumar2006-j'
                    target='_blank'
                    rel='noopener noreferer'
                  >
                <div className="rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer">
                    <FaYoutube className="text-xl" />
                </div>
                </a>

                <a href='https://wa.me/919999624402'
                    target='_blank'
                    rel='noopener noreferer'
                  >
                <div className="rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer">
                    <SiWhatsapp className="text-xl" />
                </div>
                </a>

                <a href="mailto:official.shivakumar06@gmail.com">
                  <div className="rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center cursor-pointer">
                    <IoMailOutline className="text-xl" />
                  </div>
                </a>

              </div>
            </div>
                  
            {/* Quick Links */}
            <div className="w-full md:w-50 flex flex-col justify-evenly items-center md:items-start text-center md:text-left lg:gap-3">
              <p className="text-xl font-extrabold text-white mb-3">QUICK LINKS</p>
              <p
                className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400"
                onClick={() => scrollToSection(aboutRef)}
              >
                About
              </p>
              <p
                className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400"
                onClick={() => scrollToSection(programsRef)}
              >
                Program
              </p>
              <p
                className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400"
                onClick={() => scrollToSection(pricingRef)}
              >
                Pricing
              </p>
              <p
                className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400"
                onClick={() => scrollToSection(blogsRef)}
              >
                Testimonials
              </p>
            </div>
                  
            {/* Programs */}
            <div className="w-full md:w-50 flex flex-col justify-evenly items-center md:items-start text-center md:text-left lg:gap-3">
              <p className="text-xl font-extrabold text-white mb-3">PROGRAMS</p>
              <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400">
                Weight Lifting
              </p>
              <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400">
                Cardio
              </p>
              <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400">
                Bodybuilding
              </p>
              <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400">
                Stretching Workouts
              </p>
            </div>
                  
            {/* Contact Us */}
            <div className="w-full md:w-50 flex flex-col justify-evenly items-center md:items-start text-center md:text-left lg:gap-3">
              <p className="text-xl font-extrabold text-white mb-3">CONTACT US</p>
              <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400 flex flex-row gap-2 justify-center md:justify-start">
                <FiPhoneCall className="text-gray-300 mt-1" /> +91-9999624402
              </p>
              <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400 flex flex-row gap-2 justify-center md:justify-start">
                <IoMailOutline className="text-gray-300 mt-1" /> info01@gmail.com
              </p>
              <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400 flex flex-row gap-2 justify-center md:justify-start">
                <IoLocationOutline className="text-gray-300 text-xl ml-6 lg:ml-0 lg:text-5xl lg:mb-5" /> Plot no. 140, near Unitech Signature Tower, Saini Khera Village, Sector 30, Gurugram, Harayana 122003
              </p>
            </div>
          </div>
                  
          <div className="w-full max-w-7xl border mt-3 border-gray-500"></div>
                  
          <div className="w-full mt-5 flex flex-col justify-around items-center">
            <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400 text-center">
              Copyright &copy; 2025 Shiva Kumar | Shiva Web Studio. All Rights Reserved.
            </p>
            <p className="text-[12px] text-gray-300 font-extralight cursor-pointer hover:text-gray-400 text-center">
              Privacy Policy | Terms of use
            </p>
          </div>
                  
          <div className="relative w-full h-60 lg:h-130 flex flex-col pb-10 justify-center items-center">
            <p className="select-none pointer-events-none text-white/10 font-extrabold leading-none
                          text-[60px] md:text-[90px] lg:mr-4 sm:text-8xl xs:text-6xl">
              THE
            </p>
            <p className="select-none pointer-events-none text-white/10 font-extrabold leading-none
                          text-[60px] md:text-[250px] sm:text-8xl xs:text-6xl">
              FITNESS
            </p>
            <p className="select-none pointer-events-none text-white/10 font-extrabold leading-none
                          text-[60px] md:text-[120px] sm:text-8xl xs:text-6xl">
              FACTORY
            </p>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
          </div>

          </div>
    </div>
  )
}

export default Footer