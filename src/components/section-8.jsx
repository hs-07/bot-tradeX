import React from "react";
import Carousel8 from "./carousel8";
import Carousel9 from "./carousel9";

const section8 = () => {
  return (
    <div className="px-4 md:px-20 " id="results">
      <div className="flex flex-col w-full border-x-2 border-borderColor py-20 items-center px-8">
        <div className="pb-6 flex flex-col justify-center w-full">
          <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col text-center w-full items-center leading-[1.2]">
            What Our Customers
          </span>
          <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center leading-[1.2] md:-mt-4">
            Are Saying
          </span>
        </div>
        <div className="hidden md:block w-full overflow-x-hidden">
          <Carousel9 />
        </div>
        <div className="flex md:hidden">
          <Carousel8 />
        </div>
      </div>
    </div>
  );
};

export default section8;
