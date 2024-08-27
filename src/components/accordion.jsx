"use client";
import React, { useState } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/tailwindMerge";

const Accordion = ({
  title,
  children,
  open,
  className,
  titleClassName,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div
      className={cn("px-[32px] py-2 md:py-4 w-full rounded-[8px]", className)}
    >
      <button
        className={cn(
          "flex justify-between w-full items-center cursor-pointer text-[16px] md:text-[36px] leading-[20px] md:leading-[36px] font-[600] text-white text-start gap-4",
          titleClassName
        )}
        onClick={handleToggle}
        disabled={disabled}
      >
        {title}

        <button
          className={cn(
            "p-3 rounded-lg bg-card-background text-white flex items-center justify-center text-xl"
          )}
        >
          <span
            className={cn("transition-transform duration-300 ease-in-out ")}
          >
            {isOpen ? <FiMinus /> : <FiPlus />}
          </span>
        </button>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={title}
            initial={{ height: "0" }}
            animate={{ height: isOpen ? "auto" : "0", marginTop: "16px" }}
            exit={{ height: 0, marginTop: "0px" }}
            transition={{ duration: 0.2 }}
            className={cn(
              "w-full text-[16px] md:text-[28px] font-[400] leading-[19px] md:leading-[33px] "
            )}
          >
            <motion.div
              initial="intial"
              animate="animate"
              exit="exit"
              variants={variants}
              className="text-light-gray"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
