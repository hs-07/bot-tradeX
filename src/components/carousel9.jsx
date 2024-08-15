import React, { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { customers } from "../utils/constants";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteCards = [...customers, ...customers];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 4 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 4 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (currentIndex >= customers.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, customers.length]);

  return (
    <>
      <div className="relative w-full mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-4"
          style={{ transform: `translateX(-${currentIndex * 22}%)` }}
        >
          {infiniteCards.map((card, index) => (
            <div
              className="bg-card-background rounded-lg p-6 gap-6 flex flex-col justify-between min-w-[25%]"
              key={index}
            >
              <span className="text-light-gray">{card.description}</span>
              <span className="text-white">{card.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-12 w-full justify-center pt-12">
        <button
          onClick={goToPrevious}
          className="p-2 bg-white rounded-md flex items-center justify-center text-4xl transition-all active:scale-95"
        >
          <HiOutlineChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="p-2 bg-white rounded-md flex items-center justify-center text-4xl transition-all active:scale-95"
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </>
  );
};

export default Carousel;
