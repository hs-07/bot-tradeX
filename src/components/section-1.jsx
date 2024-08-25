import React from "react";

const Section1 = () => {
  return (
    <div
      className=" min-h-[calc(72dvh-4rem)] md:h-[780px] relative w-full border-t border-borderColor overflow-y-hidden"
      id="/"
    >
      <div className="absolute top-0 right-0">
        <img
          src={"/images/hero.png"}
          alt="background"
          className="md:h-full w-full object-cover h-56"
          sizes="100"
          quality={100}
          width={400}
          height={400}
        />
      </div>
      <div className="z-[9] relative flex flex-col h-[580px]  md:h-full justify-start items-center pt-56 md:pt-28 gap-[32px] w-full">
        <span className="text-[#FFFFFF] text-[36px] md:text-[80px] leading-[36px] md:leading-[80px] text-center font-[600] px-4">
          The Future Of Algorithmic Trading Today
        </span>
        <span className="text-light-gray md:text-white text-[18px] md:text-[30px] w-full lg:w-3/5 text-center leading-[24px] md:leading-[30px] px-6">
          Empower your trading with cutting-edge algorithms and advanced
          technology.
        </span>
        <button className="text-[#EBEFFF] bg-primary border-none text-[18px] py-3 px-8 rounded-xl transition-all ease-in-out w-fit">
          <a href="/#packages" className="">
            Get Started for Free
          </a>
        </button>
      </div>
    </div>
  );
};

export default Section1;
