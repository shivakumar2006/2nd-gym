import React from 'react'

const Price = ({ pricingRef }) => {


     const price = [
        { 
            title: "Basic", 
            amount: "1000", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
        { 
            title: "3 Months", 
            amount: "2700", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
        { 
            title: "6 Months", 
            amount: "5500", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
        { 
            title: "Annual", 
            amount: "9000", 
            description: "Check out our essentials Training package, perfect for budget friendly fitness! Get solid coaching and resources to hit your goals without overspending!"
        },
    ]


  return (
    <>
     {/* price */}
    <div ref={pricingRef} className="w-auto min-h-screen bg-[#363537]">
  {/* Heading */}
  <div className="w-full flex flex-col">
    <p className="text-[130px] lg:ml-30 font-extrabold text-white tracking-tight">
      +<span className="text-[#C7FF39]">+</span>
    </p>
    <p className="text-4xl ml-10 lg:ml-30 font-bold text-white">
      SIMPLE PRICING. <span className="text-[#C7FF39]">POWERFUL RESULTS.</span>
    </p>
  </div>

  {/* Pricing Cards */}
  <div className="w-full mt-20 flex justify-center items-center">
    <div
      className="w-[1200px] h-60 overflow-visible flex flex-row justify-evenly items-start gap-4
                 max-w-full max-md:overflow-x-auto max-md:h-auto max-md:justify-start max-md:px-4 max-md:scroll-smooth"
    >
      {price?.map((item, index) => (
        <div
          key={index}
          className="w-80 h-50 bg-white/10 rounded-2xl flex flex-col justify-start items-center overflow-hidden 
                     transition-all duration-500 hover:h-96 hover:bg-white group
                     max-md:shrink-0 max-md:w-72"
        >
          {/* Title */}
          <div className="w-full px-5 mt-5 flex justify-start items-center">
            <p className="text-white group-hover:text-black text-2xl font-extrabold transition-colors duration-300">
              {item.title}
            </p>
          </div>

          {/* Price */}
          <div className="w-40 h-10 mt-3 rounded-3xl shadow-2xl font-extrabold text-white bg-black/20 
                          flex justify-center items-center group-hover:text-black group-hover:bg-black/10 transition-colors duration-300">
            <p>
              RS.{item.amount}/
              <span className="text-[10px] font-extralight">Month</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-[10px] font-extralight text-white group-hover:text-black px-5 mt-3 text-center transition-colors duration-300">
            {item.description}
          </p>

          {/* Hidden Extra Content */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-5 px-5">
            <ul className="text-xs text-black list-disc pl-4 space-y-1">
              <li>Free support</li>
              <li>6 Days in a Week access</li>
              <li>Best Trainers</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-black/80 transition cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

      {/* Footer Text */}
    <div className="w-full mt-40 pl-10 lg:pl-30 font-bold text-white text-center flex justify-start items-center gap-2 lg:text-4xl sm:text-4xl text-3xl flex-wrap sm:flex-nowrap">
      GET YOUR <span className="text-[#C7FF39]">MEMBERSHIP</span> AND START{" "}
      <span className="text-[#C7FF39]">YOUR JOURNEY</span>
    </div>

</div>
</>
  )
}

export default Price;