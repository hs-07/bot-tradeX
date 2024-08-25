import React from "react";
import Carousel from "./carousel6";
import { Link } from "react-router-dom";

const Section = () => {
  const images = [
    "/scalpClub/car-1.svg",
    "/scalpClub/car-2.svg",
    "/scalpClub/car-3.svg",
    "/scalpClub/car-4.svg",
    "/scalpClub/car-5.svg",
    "/scalpClub/car-6.svg",
    "/scalpClub/car-7.svg",
    "/scalpClub/car-8.svg",
  ];
  return (
    <div className="px-4 md:px-20">
      <div className="py-12 px-4 md:px-12 md:py-20 border-borderColor border-x flex flex-col items-center">
        <span className="text-[36px] md:text-[80px] leading-[36px] md:leading-[80px] font-[600] text-white text-center w-full pb-10 md:px-8">
          The market waits for no one. Seize the momentum and join us today!
        </span>
        <span className="text-light-gray text-[18px] md:w-1/2 text-center leading-[24px]">
          P.P.S. Don't forget to check out the positive testimonials from our
          members who are already experiencing success with the BotTradeX Scalp
          Club
        </span>
        <div className="overflow-x-hidden pt-16 pb-12 hidden md:block">
          <Carousel />
        </div>
        <div className="flex md:hidden overflow-x-auto gap-4 py-12">
          {images.map((img, index) => (
            <img src={img} alt="" className="" key={index} />
          ))}
        </div>
        <Link
          to={"https://buy.stripe.com/4gwcNL7jI7WH4x2cMM"}
          target="_blank"
          className="w-full flex justify-center"
        >
          <button className="bg-primary text-white text-[20px] h-[60px] rounded-lg px-12">
            Join the club now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section;
