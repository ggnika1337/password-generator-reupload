"use client";
import React, { useState } from "react";
type props = {
  difficulty: string;
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
};

function Strength({
  difficulty,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
}: props) {
  return (
    <>
      <div className="w-full max-h-[72px] px-[30px] h-[72px] gap-[5px] py-[20px] max-md:px-[16px] max-md:py-[14px] bg-[#18171F] flex justify-between items-center">
        <h1 className="text-[#817D92] font-bold text-[18px] max-md:text-[16px]">
          STRENGTH
        </h1>
        <div className="flex gap-[8px]">
          <h1 className="uppercase text-[#E6E5EA] font-bold text-[24px] max-md:text-[18px]">
            {difficulty}
          </h1>
          <div className="flex gap-[7px]">
            <div
              style={{ backgroundColor: colorOne }}
              className={`min-h-[36px] w-[10px] ${colorOne === "transparent" ? "border-[2px] border-white" : ""}`}
            ></div>
            <div
              style={{ backgroundColor: colorTwo }}
              className={`min-h-[36px] w-[10px] ${colorTwo === "transparent" ? "border-[2px] border-white" : ""}`}
            ></div>
            <div
              style={{ backgroundColor: colorThree }}
              className={`min-h-[36px] w-[10px] ${colorThree === "transparent" ? "border-[2px] border-white" : ""}`}
            ></div>
            <div
              style={{ backgroundColor: colorFour }}
              className={`min-h-[36px] w-[10px] ${colorFour === "transparent" ? "border-[2px] border-white" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Strength;
