import React from "react";

const section4 = () => {
  return (
    <div className="px-4 md:px-20 ">
      <div className="flex md:flex-row flex-col w-full border-x border-borderColor py-12 md:py-20 px-6 gap-6 items-center">
        <div className="w-full md:w-1/2 md:order-1 order-2">
          <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full py-4 md:py-6 leading-[36px] md:leading-[86px]">
            Our Approach
          </span>

          <p className="text-[18px] md:text-[30px] text-light-gray md:leading-[1.2] text-start">
            We are committed to redefining algorithmic trading by combining
            state-of-the-art technology with extensive market knowledge. Our
            vision is to set new standards in the industry and create a dynamic
            trading environment that maximizes potential returns for our
            clients.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full md:order-2 order-1">
          <img
            src="/images/hero-4.svg"
            alt="approach"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default section4;
