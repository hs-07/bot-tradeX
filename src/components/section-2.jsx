import React from "react";

const Section2 = () => {
  return (
    <div className="px-4 md:px-20 text-white">
      <div className="border-2 border-borderColor">
        <div className="bg-primaryGradient py-6">
          <span className="font-[600] text-[36px] md:text-[86px] text-white w-full flex justify-center py-6 md:py-14">
            About BotTradeX
          </span>
          <p className="text-light-gray text-[18px] md:text-[30px] md:leading-[1.2] text-center px-4 md:px-12 pb-6 md:pb-14">
            BotTradeX is a leading Queensland-based provider of cutting-edge
            trading automation solutions. Specializing in high-performance
            Expert Advisors (EAs), advanced High-Frequency Trading (HFT)
            algorithms, and bespoke algorithmic solutions for Forex, commodities
            and indices markets. BotTradeX empowers traders with cutting-edge
            technology. Our commitment to client success is exemplified by an
            industry-leading 14-day risk-free trial, affording traders the
            opportunity to experience the efficacy of our proprietary technology
            firsthand.
          </p>
        </div>

        <div className="w-full flex items-center flex-col py-20">
          <div className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center pb-16">
            <span className="md:-mb-10">Why Choose</span>
            <span className=""> BotTradeX?</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 gap-4 md:gap-8">
            <div className="bg-card-background flex flex-col p-8 rounded-2xl gap-8 justify-between">
              <img
                src="/images/AI.svg"
                alt="ai"
                className="w-1/2 md:w-[200px]"
              />
              <span className="text-[36px] leading-[1.2] md:text-[40px]">
                AI-Powered Analysis
              </span>
              <p className="text-[18px] md:text-[32px] text-light-gray leading-[1.2]">
                Proven rule-based algorithms, Our rule-based algorithms are
                rigorously backtested to ensure reliable performance over time.
              </p>
              <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
                Learn more
              </button>
            </div>
            <div className="bg-card-background flex flex-col p-8 rounded-2xl gap-8 justify-between">
              <img
                src="/images/alarm.svg"
                alt="ai"
                className="w-1/2 md:w-[200px]"
              />
              <span className="text-[36px] leading-[1.2] md:text-[40px]">
                Real-Time Alerts
              </span>
              <p className="text-[18px] md:text-[32px] text-light-gray leading-[1.2]">
                Stay ahead of the market with real-time alerts and notifications
                tailored to your trading strategy.
              </p>
              <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-full p-4 md:p-8 ">
            <div className="w-full bg-card-background rounded-xl flex md:flex-row flex-col">
              <div className="p-8 flex flex-col justify-between md:order-1 order-2">
                <span className="text-[36px] md:text-[40px]">
                  Expert Advisors (EAs)
                </span>
                <p className="text-[18px] md:text-[32px] text-light-gray leading-[1.2] pb-4">
                  Automate your trades with sophisticated, rule-based systems
                  designed for maximum efficiency.
                </p>
                <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
                  Contact us
                </button>
              </div>
              <div className="w-full md:order-2 order-1">
                <img
                  src="/images/hero-2.svg"
                  alt="hero"
                  className="hidden md:flex rounded-tl-xl md:rounded-tl-none rounded-tr-xl md:rounded-br-xl h-full w-full object-cover"
                />
                <img
                  src="/images/mob-hero-2.svg"
                  alt="hero"
                  className="md:hidden flex rounded-tl-xl md:rounded-tl-none rounded-tr-xl md:rounded-br-xl h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
