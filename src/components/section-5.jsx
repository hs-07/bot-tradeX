import React from "react";

const Section5 = () => {
  return (
    <div className="px-20 ">
      <div className="flex w-full border-x-2 border-borderColor py-20 px-6 gap-6 items-center">
        <div className="w-1/2 h-full">
          <img
            src="/images/hero-5.svg"
            alt="advamve tech"
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2">
          <span className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full py-6">
            Advanced Technology
          </span>

          <p className="text-[30px] text-light-gray leading-[1.2] text-start">
            Harness the power of cutting-edge technology with our proprietary
            trading Algorithm. Our robust infrastructure and sophisticated
            algorithms ensure seamless execution and unparalleled performance in
            today's dynamic markets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
