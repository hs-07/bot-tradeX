import React from "react";

const Section3 = () => {
  return (
    <div className="px-4 md:px-20 ">
      <div className="flex flex-col w-full border-x-2 border-borderColor py-20 items-center">
        <div className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center py-12 ">
          <span className="md:-mb-10 text-center">
            Comprehensive Services to{" "}
          </span>
          <span className="text-center"> Elevate Your Trading</span>
        </div>
        <p className="text-[18px] md:text-[30px] text-light-gray leading-[1.2] text-center md:w-1/2 px-4 pb-20">
          Explore our range of services designed to support and enhance your
          trading journey.
        </p>
        <div className="w-full bg-primaryGradient grid grid-cols-1 lg:grid-cols-3 px-6 lg:h-[70vh] pb-32 lg:pb-0 gap-6">
          <div className="text-light-gray w-full flex flex-col items-center gap-6 pt-6 md:pt-12">
            <span className="text-center text-[30px] font-[600] text-white">
              {" "}
              BotTradeX_EA_V1 <br /> (XAU/USD)
            </span>
            <p className="text-center text-base text-[20px] pb-6 md:pb-12">
              This specialised EA harnesses extensive knowledge of the gold
              market, employing advanced algorithms and risk management
              strategies to optimize your XAU/USD trading.
            </p>
            <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
              Learn more
            </button>
          </div>
          <div className="text-light-gray w-full flex flex-col items-center gap-6 pt-6 md:pt-12">
            <span className="text-center text-[30px] font-[600] text-white">
              {" "}
              BotTradeX_HFT
            </span>
            <p className="text-center text-base text-[20px] pb-6 md:pb-12">
              TDesigned to assess trading proficiency swiftly, this EA
              facilitates the successful completion of proprietary firm
              challenges, enabling traders to secure funded accounts within as
              little as one day. 
            </p>
            <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
              Learn more
            </button>
          </div>
          <div className="text-light-gray w-full flex flex-col items-center gap-6 pt-6 md:pt-12">
            <span className="text-center text-[30px] font-[600] text-white">
              {" "}
              BotTradeX Scalp Club
            </span>
            <p className="text-center text-base text-[20px] pb-6 md:pb-12">
              Unlock a streamlined trading experience with this exclusive
              software, offering a state-of-the-art strategy for the US30 index.
              Achieve consistent profitability with 10-30Mins daily engagement,
              ideal for busy professionals seeking efficient returns.
            </p>
            <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
