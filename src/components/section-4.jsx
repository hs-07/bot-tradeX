import React from "react";

const section4 = () => {
  return (
    <div className="px-20 ">
      <div className="flex w-full border-x-2 border-borderColor py-20 px-6 gap-6 items-center">
        <div className="w-1/2">
          <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full py-6">
            Our Approach
          </span>

          <p className="text-[30px] text-light-gray leading-[1.2] text-start">
            We are committed to redefining algorithmic trading by combining
            state-of-the-art technology with extensive market knowledge. Our
            vision is to set new standards in the industry and create a dynamic
            trading environment that maximizes potential returns for our
            clients.
          </p>
        </div>
        <div className="w-1/2 h-full">
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
