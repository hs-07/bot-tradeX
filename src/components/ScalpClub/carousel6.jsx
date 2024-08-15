import React, { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/scalpClub/car-1.svg",
    "/scalpClub/car-2.svg",
    "/scalpClub/car-3.svg",
    "/scalpClub/car-4.svg",
    "/scalpClub/car-5.svg",
    "/scalpClub/car-6.svg",
    "/scalpClub/car-7.svg",
    "/scalpClub/car-8.svg",
  ];

  const infiniteImages = [...images, ...images];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length : prevIndex - 1
    );
  };

  // To automatically reset the index when reaching the end of the infinite carousel
  useEffect(() => {
    if (currentIndex >= images.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, 300); // Small delay to allow the transition to complete
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="relative w-full mx-auto h-[60vh]">
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-4"
          style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}
        >
          {infiniteImages.map((image, index) => (
            <div
              key={index}
              className="w-1/4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[60vh] "
              />
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
