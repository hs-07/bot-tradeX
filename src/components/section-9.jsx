import React from "react";

const Section9 = () => {
  return (
    <div className="px-4 md:px-20 bg-background h-full md:mb-24">
      <div className=" min-h-[80vh] md:min-h-screen relative w-full border-x-2 border-borderColor h-full bg-background">
        <div className="absolute bottom-0 md:top-20 right-0">
          <img
            src={"/images/img-4.png"}
            alt="background"
            className="h-full w-full opacity-[0.8] h-[calc(100dvh-4rem)] object-cover w-screen "
          />
        </div>
        <div className="z-[9] relative flex flex-col md:h-screen justify-center items-center gap-[32px] w-full py-6">
          <div className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center md:pb-16">
            <span className="-mb-4 md:-mb-10">Join The future of</span>
            <span className=""> Automated Trading</span>
          </div>
          <span className="text-light-gray md:text-white text-[18px] md:text-[30px] w-full lg:w-3/5 text-center md:leading-[1] px-4">
            Ready to take your trading to the next level? Sign up for BotTradeX
            today and enjoy the benefit of automated trading
          </span>
          <button className="text-[#EBEFFF] bg-primary border-none text-[18px] py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section9;
