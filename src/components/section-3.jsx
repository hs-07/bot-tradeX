import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div className="px-4 md:px-20 h-full" id="services">
      <div className="flex flex-col w-full border-x border-borderColor pb-12 pt-12 md:pb-[180px] md:pt-[20] items-center h-full">
        <div className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center md:py-12 ">
          <span className="text-center leading-[36px] md:leading-[86px]">
            Comprehensive Services to{" "}
          </span>
          <span className="text-center  text-center leading-[36px] md:leading-[86px]">
            {" "}
            Elevate Your Trading
          </span>
        </div>
        <p className="text-[18px] md:text-[30px] text-light-gray leading-[1.2] text-center md:w-1/2 px-4 pb-12 pt-12 md:pt-0 md:pb-20">
          Explore our range of services designed to support and enhance your
          trading journey.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-4 md:px-20  md:pb-32 lg:pb-0 gap-6">
          <div className="bg-gradient-to-b from-[#5C3A20] via-[#323C5E] to-[#363D56] p-[1px] rounded-[20px]">
            <div className="text-light-gray w-full flex flex-col items-start gap-6 bg-gradient-to-b from-[#814445] via-[#573A6B] to-[#14263B] rounded-[20px] p-4 md:p-6 justify-between h-[420px] md:h-full bg-white">
              <div className="flex flex-col gap-6">
                <span className="text-start text-[30px] font-[600] text-white">
                  BotTradeX_EA_V1 <br /> (XAU/USD)
                </span>
                <p className="text-start text-base text-[20px] md:text-[28px] leading-[1] md:leading-[28px] pb-6 md:pb-12">
                  This specialised EA harnesses extensive knowledge of the gold
                  market, employing advanced algorithms and risk management
                  strategies to optimize your XAU/USD trading.
                </p>
              </div>
              <a href={"/#packages"}>
                <button
                  className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit"
                  onClick={() => {}}
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#363D56] to-[#2A3C79] p-[1px] rounded-[20px]">
            <div className="text-light-gray w-full flex flex-col items-start gap-6 bg-gradient-to-b from-[#012DC5] to-[#171717] rounded-[20px] p-4 md:p-6 justify-between h-[420px] md:h-full">
              <div className="flex flex-col gap-6">
                <span className="text-start text-[30px] font-[600] text-white">
                  {" "}
                  BotTradeX_HFT
                </span>
                <p className="text-start text-base text-[20px] md:text-[28px] leading-[1] md:leading-[28px] pb-6 md:pb-12">
                  TDesigned to assess trading proficiency swiftly, this EA
                  facilitates the successful completion of proprietary firm
                  challenges, enabling traders to secure funded accounts within
                  as little as one day.
                </p>
              </div>
              <Link
                to={
                  "https://forms.zohopublic.com.au/BotTradeX/form/ContactUs/formperma/8_vFjmBvnVcHEz6zLFDuOWA_G0nC6pLLErfbfrd5_bs"
                }
                target="_blank"
              >
                <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#363D56] to-[#2A3C79] p-[1px] rounded-[20px]">
            <div className="text-light-gray w-full flex flex-col items-start gap-6 bg-gradient-to-b from-[#216573] via-[#254451] to-[#191919] rounded-[20px] p-4 md:p-6 justify-between h-[420px] md:h-full">
              <div className="flex flex-col gap-6">
                <span className="text-start text-[30px] font-[600] text-white">
                  BotTradeX Scalp Club
                </span>
                <p className="text-start text-base text-[20px] md:text-[28px] leading-[1] md:leading-[28px] pb-6 md:pb-12">
                  Unlock a streamlined trading experience with this exclusive
                  software, offering a state-of-the-art strategy for the US30
                  index. Achieve consistent profitability with 10-30Mins daily
                  engagement, ideal for busy professionals seeking efficient
                  returns.
                </p>
              </div>
              <Link to={"/scalpClub"}>
                <button className="text-white bg-primary border-none py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
