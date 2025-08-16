import React, { useRef } from 'react';
import LeafMap from "./Map";

const Contact = () => {

    const contactRef = useRef(null);

  return (
    <div className='w-full bg-black/90'>
        {/* contact */}
        <div
          ref={contactRef}
          className="w-full min-h-screen mt-20 md:mt-0 flex flex-col md:flex-row justify-center items-center"
        >
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 h-auto md:h-screen flex flex-col justify-evenly items-center px-4">
            <p className="text-white text-4xl md:text-6xl font-extrabold md:mr-75">
              CON<span className="text-[#C7FF39]">TACT</span>
            </p>

            <div className="w-full md:w-xl rounded-2xl bg-white/10 flex flex-col p-4 md:p-0">
              <p className="w-full mt-4 md:mt-8 md:ml-5 text-white text-3xl md:text-5xl font-extrabold">
                GET IN <span className="text-[#C7FF39]">TOUCH</span>
              </p>

              {/* Name & Email */}
              <div className="w-full mt-6 md:mt-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
                <div className="w-full md:w-1/2 flex flex-col justify-evenly items-start md:items-center">
                  <p className="text-white lg:mr-39 font-bold">NAME</p>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full md:w-60 h-10 bg-black/20 placeholder:text-gray-300 placeholder:font-light placeholder:text-[13px] pl-5 rounded-2xl"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-evenly items-start md:items-center">
                  <p className="text-white lg:mr-39 font-bold">EMAIL</p>
                  <input
                    type="text"
                    required
                    placeholder="youremail@gmail.com"
                    className="w-full md:w-60 h-10 text-white bg-black/20 placeholder:text-gray-300 placeholder:font-light placeholder:text-[13px] pl-5 rounded-2xl"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full mt-5 flex flex-col">
                <p className="w-full lg:ml-10 text-white font-bold">LEAVE US A MESSAGE</p>
                <textarea
                  name="message"
                  required
                  placeholder="leave us a message"
                  className="w-full md:w-135 h-40 lg:ml-4 md:h-65 pt-3 text-white bg-black/20 placeholder:text-gray-300 placeholder:font-light placeholder:text-[13px] pl-5 pr-5 rounded-2xl"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-50 h-10 lg:mb-4 lg:ml-90 bg-white rounded-2xl mt-4 cursor-pointer text-black"
              >
                Send message
              </button>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full md:w-1/2 h-64 md:h-screen flex flex-col justify-center items-center mt-6 md:mt-0">
            <div className="w-full h-64 md:h-80 flex justify-center items-center">
              <div className="w-full md:w-150 h-full">
                <LeafMap />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact