import React from "react";
import Carousel8 from "./carousel8";

const section8 = () => {
  return (
    <div className="px-4 md:px-20 ">
      <div className="flex flex-col w-full border-x-2 border-borderColor py-20 items-center px-8">
        <div className="pb-6 flex flex-col justify-center w-full">
          <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col text-center w-full items-center leading-[1.2]">
            What Our Customers
          </span>
          <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center leading-[1.2] md:-mt-4">
            Are Saying
          </span>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className="bg-card-background rounded-lg p-6 gap-2 flex flex-col"
              key={index}
            >
              <span className="text-light-gray">
                Bottradex has transformed the way I trade. The AI insights are
                incredibly accurate, and the platform is intuitive and easy to
                use.
              </span>
              <div className="flex gap-2 items-center">
                <img src="/images/profile.svg" alt="profile" className="" />
                <span className="text-white">Fennan Bell</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex md:hidden">
          <Carousel8 />
        </div>
      </div>
    </div>
  );
};

export default section8;
