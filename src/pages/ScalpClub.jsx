import React from "react";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "../components/ScalpClub";
import { Footer, Navbar, Underline } from "../components";

const ScalpClub = () => {
  return (
    <div className="bg-background smooth-scroll w-full">
      <Navbar />
      <Section1 id="section1" />
      <Section2 id="section2" />
      <Underline />
      <Section3 id="section3" />
      <Underline />
      <Section4 id="section4" />
      <Underline />
      <Section5 id="section5" />
      <Underline />
      <Section6 id="section6" />
      <Underline />
      <Footer />
    </div>
  );
};

export default ScalpClub;
