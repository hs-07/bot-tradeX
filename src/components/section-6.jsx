import React from "react";

const Section6 = () => {
  return (
    <div className="px-20 min-h-screen flex flex-col">
      <div className="border-x-2 border-borderColor pt-20 relative h-full min-h-screen z-[9] px-8">
        <div className="absolute top-20 right-0 -z-[1]">
          <img
            src={"/images/img-2.png"}
            alt="background"
            className="h-full w-full object-cover w-screen"
          />
        </div>
        <div className="w-[35rem] p-6 rounded-xl backdrop-blur-md bg-[#00000070]">
          <span className="text-[84px] text-white font-[600] leading-[1.2]">
            Our Mission
          </span>
          <p className="text-[36px] text-light-gray font-[400] leading-[1.2]">
            Empowering traders with intelligent automation solutions for
            consistent profitability and risk mitigation.
          </p>
        </div>
      </div>
      <div className="border-x-2 border-borderColor pb-20 relative h-full  min-h-screen z-[9] px-8 flex w-full justify-end">
        <div className="w-[35rem] p-6 rounded-xl backdrop-blur-md bg-[#00000070] h-fit">
          <span className="text-[84px] text-white font-[600] leading-[1.2]">
            Our Vision
          </span>
          <p className="text-[36px] text-light-gray font-[400] leading-[1.2]">
            To become the leading provider of reliable, intuitive, and
            high-performance trading automation software in Australia and
            beyond.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-full -z-[1]">
          <img
            src={"/images/img-3.png"}
            alt="background"
            className="h-full w-full object-cover w-screen"
          />
        </div>
      </div>
      <div className="h-[20vh] w-full bg-background border-x-2 border-borderColor" />
    </div>
  );
};

export default Section6;
