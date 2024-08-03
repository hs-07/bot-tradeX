import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-background flex flex-col gap-8 p-4 md:p-12 landing">
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-[24px] font-bold">About Us</h2>
        <span className="text-light-gray">
          Welcome to BotTradeX!
          <br />
          <br />
          BotTradeX is a Queensland-based provider of cutting-edge trading
          automation solutions. We specialize in developing high-performance
          Expert Advisors (EAs) and advanced algorithmic strategies designed to
          optimize trading performance in the Forex and indices markets. Our
          team of seasoned financial professionals and technologists is
          committed to empowering traders of all levels with the tools and
          knowledge necessary to navigate the complexities of modern markets. We
          offer comprehensive support and educational resources, tailored to
          enhance your trading knowledge and skills, ultimately maximizing your
          potential for success. Partner with BotTradeX and leverage our
          expertise to gain a competitive edge in the global markets. Experience
          the transformative power of intelligent automation and unlock new
          possibilities for financial growth.
        </span>
      </div>
    </div>
  );
};

export default About;
