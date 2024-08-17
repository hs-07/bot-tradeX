import { useState, useRef } from "react";
import { customers } from "../utils/constants";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startPosition = useRef(0);
  const endPosition = useRef(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
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
          {customers.map((item, index) =>
            index === currentIndex ? (
              <div
                className="bg-card-background rounded-lg p-6 gap-6 flex flex-col justify-between min-w-[25%]"
                key={index}
              >
                <span className="text-light-gray">{item.description}</span>
                <span className="text-white">{item.name}</span>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {customers.map((_, index) => (
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
