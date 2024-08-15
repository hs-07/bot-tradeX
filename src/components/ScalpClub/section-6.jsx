import React from "react";
import Carousel from "./carousel6";

const Section = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="py-4 px-4 md:px-12 md:py-20 border-borderColor border-x flex flex-col items-center">
        <span className="text-[36px] md:text-[80px] md:leading-[80px] font-[600] text-white text-center w-full pb-10 md:px-8">
          The market waits for no one. Seize the momentum and join us today!
        </span>
        <span className="text-light-gray text-[18px] md:w-1/2 text-center leading-[24px]">
          P.P.S. Don't forget to check out the positive testimonials from our
          members who are already experiencing success with the BotTradeX Scalp
          Club
        </span>
        <div className="overflow-x-hidden pt-16 pb-12">
          <Carousel />
        </div>
        <button className="bg-primary text-white text-[20px] h-[60px] rounded-lg px-12">
          Join the club now
        </button>
      </div>
    </div>
  );
};

export default Section;
