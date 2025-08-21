import React from 'react';
import { FaDumbbell } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { FaCrown } from "react-icons/fa";

const About = ({ aboutRef }) => {

    const information = [
        {
            name: "Quality Equipment",
            description: "Train with confidence using our top-tier, durable gym equipment designed for maximum performance Every machine and weight is built to deliver safety, comfort, and results you can feel.",
            logo: <FaDumbbell className='text-2xl text-[#C7FF39]'/>
        },
        {
            name: "Healthy Nutrition Plan",
            description: "Fuel your fitness journey with our healthy, personalized nutrition plans. Balanced meals, tailored to your goals, to keep you energized and on track.",
            logo: <LuClipboardList className='text-2xl text-[#C7FF39]'/>
        },
        {
            name: "Expert Trainers",
            description: "Train under certified professionals with years of real-world experience.Our expert coaches guide, motivate, and push you beyond your limits for lasting results",
            logo: <MdOutlineDirectionsRun className='text-2xl text-[#C7FF39]'/>
        },
        {
            name: "Premium Membership",
            description: "Unlock exclusive benefits with our Premium Membership — priority access, advanced classes, and VIP perks.Designed for those serious about fitness, giving you more value, more results, and more motivation.",
            logo: <FaCrown className='text-2xl text-[#C7FF39]'/>
        }
    ]

  return (
    <div ref={aboutRef} className='w-auto min-h-screen bg-black/80'>
        {/* Categor Banner */}
        <div className='w-full h-15 text-2xl font-bold bg-[#FFFFFA] flex flex-row flex-wrap justify-center items-center gap-8 max-[410px]:gap-3 px-2 max-[410px]:text-sm text-center'>

            {/* These two always visible */}
            <p>BODYBUILDING</p>
            <p className='text-5xl mt-4'>*</p>
                    
            <p className='sm:block hidden'>WEIGHT LIFTING</p>
            <p className='text-5xl mt-4 sm:block hidden'>*</p>
            <p className='sm:block hidden'>STRENGTH TRAINING</p>
            <p className='text-5xl mt-4 sm:block hidden'>*</p>
            <p className='sm:block hidden'>CARDIO</p>
            <p className='text-5xl mt-4 sm:block hidden'>*</p>
            <p className='sm:block hidden'>ONLINE & IN-PERSON</p>
        </div>

        <div className='text-white'>
            <p className='text-white text-3xl md:text-4xl mt-20 md:ml-20 ml-12'><span className='text-[#C7FF39] font-extrabold text-6xl'>++</span> WHY CHOOSE US</p>
        </div>
        <div className='w-full mt-10 flex flex-col md:flex-row justify-around items-center'>
            <p className='text-white font-extrabold text-center text-4xl md:text-5xl md:mr-80'>PUSH YOUR <span className='text-[#C7FF39]'>LIMIT <br />FORWARD</span></p>
            <p className='md:text-[14px] text-white text-[12px]'>Train with the best experts in Bodybuilding Field. Your <br /> 
                Results will speaks to themselves. Try the Latest Exercising <br />
                Trends. Innovative Equipment And Special Nutrition Plans.
            </p>
        </div>
        <div className='w-full mt-20 flex justify-center items-center pb-15 md:pb-0'>
            <div className='w-320 flex flex-wrap justify-around items-center gap-5 md:gap-0 mt-[-50px] md:mt-0'>
                {information?.map((item, index) => (
                    <div key={index} className='w-63 h-53 flex flex-col text-white bg-black/20 rounded-2xl transition-transform duration-300 hover:scale-103 hover:bg-[#FFFFFA] hover:text-black group shadow-xl'>
                    <div className='w-15 h-15 mt-5 ml-4 rounded-full bg-black/30 flex justify-center items-center group-hover:bg-black'>
                        {item.logo}
                    </div>
                    <p className=' text-sm ml-5 mt-3'>{item.name}</p>
                    <p className=' font-extralight mt-2 text-[10px] px-4 ml-0'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About