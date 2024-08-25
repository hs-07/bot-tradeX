import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div
      className=" min-h-[70vh] md:min-h-[calc(100dvh-4rem)] relative w-full border-y-2 border-borderColor overflow-y-hidden"
      id="scalpClub"
    >
      <div className="absolute top-0 right-0">
        <img
          src={"/scalpClub/hero.png"}
          alt="background"
          className="h-64 md:h-full w-full opacity-[0.8] md:min-h-[calc(100dvh-4rem)] object-cover w-screen"
          sizes="120"
          quality={120}
          width={600}
          height={600}
        />
      </div>
      <div className="z-[9] relative flex flex-col h-[70vh] md:h-[calc(100dvh-4rem)] justify-center items-center gap-[32px] w-full pt-32 md:pt-0">
        <span className="text-[#FFFFFF] text-[36px] md:text-[80px] leading-[1] text-center font-[600] px-4">
          Level Up Your Scalping <br />
          Game with
        </span>
        <span className="text-light-gray md:text-[#FFFFFF] text-[18px] md:text-[48px] leading-[1] text-center font-[600] px-4">
          BotTradeX Scalp Club
        </span>
        <Link
          to={
            "https://forms.zohopublic.com.au/BotTradeX/form/ContactUs/formperma/8_vFjmBvnVcHEz6zLFDuOWA_G0nC6pLLErfbfrd5_bs"
          }
          target="_blank"
          className="w-full flex justify-center"
        >
          <button className="flex md:hidden text-[#EBEFFF] bg-primary border-none text-[18px] py-3 px-8 rounded-xl transition-all ease-in-out w-fit mt-10">
            Get Started for Free
          </button>
        </Link>
      </div>

      <div className="hidden md:flex w-full h-40 bg-gradient-to-b from-transparent to-black to-[70%]" />
    </div>
  );
};

export default Section1;
