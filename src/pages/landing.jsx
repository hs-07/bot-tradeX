import React from "react";
import {
  Section1,
  Section2,
  Underline,
  Section3,
  Section4,
  Section5,
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
    </div>
  );
};

export default Landing;
