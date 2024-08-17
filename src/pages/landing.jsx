import React from "react";
import {
  Navbar,
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
    <div className="bg-background smooth-scroll w-full">
      <Navbar />
      <Section1 id="section1" />
      <Underline />
      <Section2 id="section2" />
      <Underline />
      <Section3 id="section3" />
      <Section4 id="section4" />
      <Underline />
      <Section5 id="section5" />
      <Underline />
      <Section6 id="section6" />
      <Underline />
      <Section7 id="section7" />
      <Underline />
      <Section8 id="section8" />
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
