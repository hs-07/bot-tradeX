import React from "react";

const Section = () => {
  const points = [
    "Exclusive weekly trading lesson",
    "Proprietary momentum indicator on TradingView that sends BUY/SELL signals  (Invite Only)",
    "Private WhatsApp community",
    "Expert strategy optimization to maximize returns",
    "Additional educational resources",
    " Earn 1-2% a day, with 10-30 mins daily engagement",
    " Flexible membership with easy cancellation.",
  ];
  return (
    <div className="px-4 md:px-20">
      <div className="py-4 px-4 md:px-12 md:py-20 border-borderColor border-x flex flex-col items-center">
        <span className="text-[36px] md:text-[80px] md:leading-[80px] font-[600] text-white text-center w-full pb-10">
          Ready to Catch Those Profits?
        </span>
        <span className="text-light-gray text-[18px] pb-12">
          Become a member of the BotTradeX Scalp Club and unlock the full
          potential of your scalping journey
        </span>
        <div className="bg-card-background flex w-full md:flex-row flex-col rounded-[20px] md:rounded-[50px]">
          <div className="w-[45%] pr-4 rounded-l-[50px]">
            <img
              src="/scalpClub/hero-3.svg"
              alt=""
              className="hidden md:flex rounded-l-[50px] h-full object-cover"
            />
            <img
              src="/scalpClub/mob-hero-3.svg"
              alt=""
              className="md:hidden flex rounded-t-[20px]"
            />
          </div>
          <div className="w-[55%] p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full flex flex-col gap-4">
              <span className="text-light-gray font-[700] w-48 text-[18px]">
                BotTradeX Scalp Club Membership Benefits
              </span>
              {points.map((point, index) => (
                <div className="flex gap-2" key={index}>
                  <img src="/images/tick.svg" alt="tick" className="w-5 h-5" />
                  <span className="text-white text-[18px]">{point}</span>
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col gap-4 justify-between">
              <div className="w-full flex flex-col gap-4">
                <span className="text-[48px] text-white font-[700] leading-[1]">
                  AUD $999
                </span>
                <p className="text-light-gray">Monthly Subscription</p>
                <span className="text-[64px] leading-[70px] font-[400] text-light-gray">
                  Start your free 30 Day Trial
                </span>
              </div>
              <button className="bg-primary text-white text-[20px] h-[60px] rounded-lg">
                Join the club now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
