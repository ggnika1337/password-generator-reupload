"use client";
import React, { useState } from "react";
import Copyimg from "../../../public/Copy.svg";
import CopyHover from "../../../public/CopyHover.svg";
import Image from "next/image";
type props = {
  copy: () => void;
  output: string;
};

function Output({ copy, output }: props) {
  const [hovered, setHovered] = useState<Boolean>(false);
  const [copied, setCopied] = useState<Boolean>(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      console.log(copied);
      setTimeout(() => {
        setCopied(false);
        console.log(copied);
      }, 5000);
    } catch (error) {
      return;
    }
  }

  return (
    <>
      <div className="w-full flex justify-between  items-center max-md:px-[14px] max-md:py-[18px] px-[32px] py-[24px] bg-[#24232C]">
        <h1 className="text-[#E6E5EA] font-bold text-[28px] max-md:text-[24px] max-sm:text-[20px]">
          {output}
        </h1>
        <div className="flex gap-[15px]">
          <h1 className="text-[18px] font-[700] text-[#A4FFAF]" style={{ display: copied ? "block" : "none" }}>COPIED</h1>
          <div
            className="relative size-[25px] cursor-pointer"
            onClick={copy}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={Copyimg}
              alt="copy green"
              className={`absolute ${hovered ? "opacity-0" : "opacity-100"}`}
            />
            <Image
              src={CopyHover}
              alt="copy white"
              className={`absolute ${hovered ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Output;
