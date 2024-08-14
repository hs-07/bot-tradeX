import React from "react";

const Section = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="py-4 px-4 md:px-12 md:py-20 border-borderColor border-x">
        <div className="bg-card-background p-4 md:p-12 rounded-[20px] md:rounded-[30px] w-full flex flex-col items-center">
          <span className="text-[80px] leading-[80px] font-[600] text-white text-center w-full">
            Ready to unlock explosive short-term profits?
          </span>
          <span className="text-light-gray leading-[40px] text-[30px] text-center pt-[40px]">
            Join the BotTradeX Scalp Club and master the art of scalping with
            our live, chat-delivered momentum indicators.
          </span>
          <button className="flex text-[#EBEFFF] bg-primary border-none text-[18px] py-3 px-8 rounded-xl transition-all ease-in-out w-fit mt-10">
            Start your 30 day free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
