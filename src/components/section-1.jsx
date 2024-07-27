import React from "react";

const Section1 = () => {
  return (
    <div className=" min-h-[calc(100dvh-4rem)] relative w-full border-y-2 border-borderColor overflow-y-hidden">
      <div className="absolute top-0 right-0">
        <img
          src={"/images/hero.png"}
          alt="background"
          className="h-full w-full opacity-[0.8] h-[calc(100dvh-4rem)] object-cover w-screen"
        />
      </div>
      <div className="z-[9] relative flex flex-col h-[calc(100dvh-4rem)] justify-center items-center gap-[32px] w-full">
        <span className="text-[#FFFFFF] text-[36px] md:text-[80px] leading-[1] text-center font-[600] px-4">
          The Future Of Algorithmic Trading Today
        </span>
        <span className="text-white text-[18px] md:text-[30px] w-full lg:w-3/5 text-center leading-[1] px-4">
          Empower your trading with cutting-edge algorithms and advanced
          technology.
        </span>
        <button className="text-[#EBEFFF] bg-primary border-none text-[18px] py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
          Get Started for Free
        </button>
      </div>
    </div>
  );
};

export default Section1;
