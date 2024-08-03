import React from "react";
import {
  Section1,
  Section2,
  Underline,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Footer,
} from "../components";

const Landing = () => {
  return (
    <div className="bg-background">
      <Section1 />
      <Section2 />
      <Underline />
      <Section3 />
      <Section4 />
      <Underline />
      <Section5 />
      <Underline />
      <Section6 />
      <Underline />
      <Section7 />
      <Underline />
      <Section8 />
      <Underline />
      <Section9 />
      <div className="w-full flex md:hidden">
        <Underline />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
