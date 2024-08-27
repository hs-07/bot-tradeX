import React from "react";
import Accordion from "./accordion";
import { faqs } from "../utils/constants";

const Faq = () => {
  return (
    <div className="px-4 md:px-20 w-full">
      <div className="flex flex-col w-full border-x border-borderColor py-12 md:py-[20] px-0 md:px-6 items-center h-full">
        <div className="font-[600] text-[36px] md:text-[86px] text-white flex flex-col w-full items-center md:py-12 ">
          <span className="text-center leading-[36px] md:leading-[86px]">
            BotTradeX_EA_V1 FAQ
          </span>
        </div>
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div className="" key={index}>
              <Accordion title={faq.title}>{faq.content}</Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
