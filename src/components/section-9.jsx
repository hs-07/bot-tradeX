import React from "react";
import { Link } from "react-router-dom";

const Section9 = () => {
  return (
    <div className="px-4 md:px-20 bg-background h-full">
      <div className=" min-h-[70vh] md:min-h-[950px] relative w-full border-x-2 border-borderColor h-full bg-background pb-[100px]">
        <div className="absolute bottom-20 md:bottom-0 md:top-56 right-0">
          <img
            src={"/images/img-4.png"}
            alt="background"
            className="h-full w-full opacity-[0.8] md:h-screen object-cover w-screen "
          />
        </div>
        <div className="z-[9] relative flex flex-col md:h-screen justify-start items-center gap-[20px] w-full md:py-[100px]">
          <div className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center">
            <span className="-mb-4 md:-mb-10">Join The future of</span>
            <span className=""> Automated Trading</span>
          </div>
          <span className="text-light-gray md:text-white text-[18px] md:text-[30px] w-full lg:w-3/5 text-center md:leading-[1] px-4">
            Ready to take your trading to the next level? Sign up for BotTradeX
            today and enjoy the benefit of automated trading
          </span>
          <Link
            to={
              "https://forms.zohopublic.com.au/BotTradeX/form/ContactUs/formperma/8_vFjmBvnVcHEz6zLFDuOWA_G0nC6pLLErfbfrd5_bs"
            }
            target="_blank"
            className="w-full flex justify-center"
          >
            <button className="text-[#EBEFFF] bg-primary border-none text-[18px] py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
              Get Started for Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section9;
