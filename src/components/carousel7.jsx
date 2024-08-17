import { useState, useRef } from "react";
import { packages } from "../utils/constants";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startPosition = useRef(0);
  const endPosition = useRef(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === packages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? packages.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    startPosition.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    endPosition.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const distance = endPosition.current - startPosition.current;
    if (distance > 50) {
      handlePrev();
    } else if (distance < -50) {
      handleNext();
    }
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden relative">
      <div
        className="flex justify-center items-center relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden w-full relative">
          {packages.map((item, index) =>
            index === currentIndex ? (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center"
              >
                <div
                  className={`p-4 flex flex-col rounded-lg text-white justify-between min-h-screen ${
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
                    <button className="bg-primary text-black text-[20px] py-2 rounded-lg mt-4 bg-white mt-32 w-full">
                      {index === 0 ? "14 Day Trial" : "Upgrade"}
                    </button>
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>
        {/* <button
          onClick={handleNext}
          className="absolute right-0 text-xl p-2 z-10 text-white"
          aria-label="Next"
        >
          &gt;
        </button> */}
      </div>
      <div className="flex justify-center mt-4">
        {packages.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 mx-1 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-[#4A4A4A]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
