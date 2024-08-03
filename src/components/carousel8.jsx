import { useState, useRef } from "react";
import { packages } from "../utils/constants";

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
        {/* <button
          onClick={handlePrev}
          className="absolute left-0 text-xl p-2 z-10 text-white"
          aria-label="Previous"
        >
          &lt;
        </button> */}
        <div className="overflow-hidden w-full relative">
          {packages.map((item, index) =>
            index === currentIndex ? (
              <div
                key={item.id}
                className="w-full flex-shrink-0 flex flex-col items-center"
              >
                <div
                  className="bg-card-background rounded-lg p-6 gap-2 flex flex-col"
                  key={index}
                >
                  <span className="text-light-gray">
                    Bottradex has transformed the way I trade. The AI insights
                    are incredibly accurate, and the platform is intuitive and
                    easy to use.
                  </span>
                  <div className="flex gap-2 items-center">
                    <img src="/images/profile.svg" alt="profile" className="" />
                    <span className="text-white">Fennan Bell</span>
                  </div>
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
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
