import React from "react";

const Section5 = () => {
  return (
    <div className="px-20 ">
      <div className="flex w-full border-x-2 border-borderColor flex-col py-20 px-6">
        <div className="flex w-full pb-12 gap-6 items-center">
          <div className="w-1/2 h-full">
            <img
              src="/images/hero-5.svg"
              alt="advamve tech"
              className="w-full h-full"
            />
          </div>
          <div className="w-1/2">
            <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full py-6 leading-[1.2]">
              Advanced Technology
            </span>

            <p className="text-[30px] text-light-gray leading-[1.2] text-start">
              Harness the power of cutting-edge technology with our proprietary
              trading Algorithm. Our robust infrastructure and sophisticated
              algorithms ensure seamless execution and unparalleled performance
              in today's dynamic markets.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="w-[30%] bg-card-background rounded-2xl px-4 py-8 flex flex-col gap-4">
              <span className="text-[36px] text-white font-[600] leading-[1.2]">
                In-Depth Market Analysis
              </span>
              <p className="text-[24px] text-light-gray">
                Leverage extensive research and analysis to inform data-driven
                trading decisions
              </p>
            </div>
            <div className="w-[40%] bg-card-background rounded-2xl px-4 py-8 flex flex-col gap-4">
              <span className="text-[36px] text-white font-[600] leading-[1.2]">
                Customisable Strategies 
              </span>
              <p className="text-[24px] text-light-gray">
                Tailor your EA's parameters to align with your unique risk
                tolerance and trading objectives
              </p>
            </div>
            <div className="w-[30%] bg-card-background rounded-2xl px-4 py-8 flex flex-col gap-4">
              <span className="text-[36px] text-white font-[600] leading-[1.2]">
                Enhanced Signal Identification
              </span>
              <p className="text-[24px] text-light-gray">
                Focus on high-probability trading opportunities by filtering out
                market noise
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-[40%] bg-card-background rounded-2xl px-4 py-16 flex flex-col gap-4">
              <span className="text-[36px] text-white font-[600] leading-[1.2]">
                Adaptive Algorithms
              </span>
              <p className="text-[24px] text-light-gray">
                Benefit from constantly evolving algorithms that adapt to
                changing market conditions.
              </p>
            </div>
            <div className="w-[60%] bg-card-background rounded-2xl px-4 py-16 flex flex-col gap-4">
              <span className="text-[36px] text-white font-[600] leading-[1.2]">
                Robust Risk Management
              </span>
              <p className="text-[24px] text-light-gray">
                Safeguard your capital with customisable risk management tools
                designed for your specific assets and trading style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
