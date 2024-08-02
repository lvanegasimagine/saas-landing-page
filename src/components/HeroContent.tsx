import React from "react";
import ArrowIcon from "@/assets/arrow-right.svg";

const HeroContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag font-medium">Version 2.0 is here</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
