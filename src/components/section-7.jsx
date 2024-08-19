import React from "react";
import { Link } from "react-router-dom";

import { packages } from "../utils/constants";
import Carousel7 from "./carousel7";

const Section7 = () => {
  return (
    <div className="px-4 md:px-20 overflow-x-hidden" id="packages">
      <div className="flex flex-col w-full border-x border-borderColor py-20 items-center px-8 overflow-x-auto">
        <div className="pb-6">
          <span className="font-[600] text-[36px] md:text-[86px] text-center text-white flex flex-col w-full items-center leading-[1.2] pb-4">
            BotTradeX EA Packages
          </span>
          <p className="text-[18px] md:text-[30px] text-light-gray leading-[1.2] text-center pb-20">
            Empower Your Trading with Cutting-Edge Expert Advisors
          </p>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-6">
          {packages.map((item, index) => (
            <div
              className={`p-4 flex flex-col rounded-lg text-white justify-between ${
                index === 0 ? "bg-primary" : "bg-card-background"
              }`}
              key={index}
            >
              {" "}
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-[500]">{item.plan}</h3>
                <h1 className="text-[32px] font-[500]">{item.cost}</h1>
                <h3 className="text-light-gray text-base leading-[1.2]">
                  {item.subtext}
                </h3>
                <span className="text-light-gray text-[20px] py-4 font-bold">
                  Features
                </span>

                <div className="flex flex-col gap-4">
                  {item.features.map((feature) => (
                    <p
                      className="text-white text-base leading-[1.2]"
                      key={index}
                    >
                      {feature}
                    </p>
                  ))}
                </div>

                <span className="text-light-gray text-[20px] py-4 font-bold">
                  Benefits
                </span>

                <div className="flex flex-col gap-4">
                  {item.benefits.map((feature, index) => (
                    <p
                      className="text-white text-base leading-[1.2] flex gap-2 items-start"
                      key={index}
                    >
                      <img src="/images/tick.svg" alt="tick" className="" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
              <Link
                to={
                  "https://forms.zohopublic.com.au/BotTradeX/form/ContactUs/formperma/8_vFjmBvnVcHEz6zLFDuOWA_G0nC6pLLErfbfrd5_bs"
                }
                target="_blank"
                className="w-full"
              >
                <button className="text-black text-[20px] py-2 w-full rounded-lg mt-4 bg-white mt-32">
                  {"Contact Us"}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex md:hidden">
          <Carousel7 />
        </div>
      </div>
    </div>
  );
};

export default Section7;
