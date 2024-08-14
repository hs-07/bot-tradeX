import React from "react";
import { Section1, Section2, Section3 } from "../components/ScalpClub";
import { Navbar, Underline } from "../components";

const ScalpClub = () => {
  return (
    <div className="bg-background smooth-scroll w-full">
      <Navbar />
      <Section1 id="section1" />
      <Section2 id="section2" />
      <Underline />
      <Section3 id="section3" />
    </div>
  );
};

export default ScalpClub;
