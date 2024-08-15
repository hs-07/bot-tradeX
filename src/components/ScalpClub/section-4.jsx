import React from "react";

const Section = () => {
  return (
    <div className="px-4 md:px-20">
      {" "}
      <div className="py-4 px-4 md:px-12 md:py-20 border-borderColor border-x flex flex-col items-center">
        <span className="text-[36px] md:text-[80px] md:leading-[80px] font-[600] text-white text-center w-full pb-8">
          But Wait, There's More!
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 pb-10">
          <div className="bg-card-background flex flex-col p-8 rounded-2xl gap-8 justify-between">
            <img src="/scalpClub/market.svg" alt="graph" className="w-1/2" />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              Level Up Your Skills
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              We've got a treasure trove of educational resources and tips from
              expert traders. Learn from the best and become a scalping pro!
            </p>
          </div>
          <div className="bg-card-background flex flex-col p-8 rounded-2xl gap-8 justify-between">
            <img src="/scalpClub/people.svg" alt="target" className="w-1/2" />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              Join the Scalping Squad
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              Connect with a vibrant community of fellow traders. Share ideas,
              learn from each other, and level up together.
            </p>
          </div>
          <div className="bg-card-background flex flex-col p-8 rounded-2xl gap-8 justify-between">
            <img src="/scalpClub/location.svg" alt="bulb" className="w-1/2" />
            <span className="text-[36px] leading-[36px] md:text-[36px] text-white">
              Limited Spots Available
            </span>
            <p className="text-[18px] text-light-gray leading-[24px]">
              Don't miss out! We keep our membership exclusive to ensure you get
              the attention and support you deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
