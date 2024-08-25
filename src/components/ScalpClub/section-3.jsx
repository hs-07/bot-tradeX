import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="py-4 px-4 md:px-12 md:py-20 border-borderColor border-x flex flex-col items-center">
        <span className="text-[36px] md:text-[80px] leading-[80px] font-[600] text-white text-center w-full md:pb-8">
          Here's the deal
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-12 pb-10">
          <div className="bg-card-background flex flex-col p-4 md:p-8 rounded-2xl gap-8 justify-between">
            <img src="/scalpClub/graph.svg" alt="graph" className="w-1/2" />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              Live Signals, Delivered Hot
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              Our custom-built momentum indicator does the heavy lifting. It
              analyzes the US30 market (think Dow Jones) and sends you clear
              buy/sell signals straight to your chat. No more squinting at
              charts!
            </p>
          </div>
          <div className="bg-card-background flex flex-col p-4 md:p-8 rounded-2xl gap-8 justify-between">
            <img src="/scalpClub/target.svg" alt="target" className="w-1/2" />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              Focus on the Action, Not the Analysis
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              Forget endless chart analysis. We give you the info you need
              during the prime NY open window (11:30 PM AEST), so you can focus
              on making those winning trades.
            </p>
          </div>
          <div className="bg-card-background flex flex-col p-4 md:p-8 rounded-2xl gap-8 justify-between">
            <img src="/scalpClub/bulb.svg" alt="bulb" className="w-1/2" />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              Profit Potential? You Bet!
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              Back testing shows our indicator has a knack for delivering daily
              1%- 2% gains on the US30. Not bad, right?
            </p>
          </div>
        </div>
        <div className="">
          <img
            src="/scalpClub/hero-2.svg"
            alt="hero-2"
            className=""
            sizes="50"
            quality={50}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-12 pb-10">
          <div className="bg-card-background flex flex-col p-4 md:p-10 rounded-2xl gap-8 justify-start">
            <img src="/scalpClub/US30.svg" alt="US30" className="w-full" />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              Beyond US30? No-Problem
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              While it loves the US30, the indicator can work its magic on other
              markets like Gold (XAU/USD) too
            </p>
          </div>
          <div className="bg-card-background flex flex-col p-4 md:p-10 rounded-2xl gap-8 justify-start">
            <img
              src="/scalpClub/bar-chart.svg"
              alt="bar-chart"
              className="w-1/2 md:w-1/3"
            />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              TradingView Ready
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              We integrate seamlessly with the awesome Trading View platform,
              (Premium Package) giving you all the charting tools you need to
              make informed decisions.
            </p>
          </div>
        </div>
        <Link
          to={
            "https://forms.zohopublic.com.au/BotTradeX/form/ContactUs/formperma/8_vFjmBvnVcHEz6zLFDuOWA_G0nC6pLLErfbfrd5_bs"
          }
          target="_blank"
          className="w-full flex justify-center"
        >
          <button className="text-white bg-primary border-none px-12 rounded-xl transition-all ease-in-out w-fit my-8 h-[60px]">
            Start today for free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section;
