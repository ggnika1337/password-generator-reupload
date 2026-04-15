"use client";
type props = {
  onClickOne: () => void;
  onClickTwo: () => void;
  onClickThree: () => void;
  onClickFour: () => void;
  difficulty: string;
  activeOne: boolean;
  activeTwo: boolean;
  activeThree: boolean;
  activeFour: boolean;
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  generate: () => void;
  slider: () => void;
  count: number;
};
import Check from "@/components/__atoms/Check/Check";
import Counter from "@/components/__atoms/Counter/Counter";
import Strength from "@/components/__atoms/Strength/Strength";
import Image from "next/image";
import { useState } from "react";
import arrow from "../../../public/Arrow.svg";

function Input({
  onClickOne,
  onClickTwo,
  onClickThree,
  onClickFour,
  difficulty,
  activeOne,
  activeTwo,
  activeThree,
  activeFour,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  generate,
  slider,
  count,
}: props) {
  return (
    <>
      <div className="bg-[#24232C] w-full  p-[28px] max-md:p-[20px] flex flex-col gap-[30px]">
        <Counter slider={slider} count={count} />
        <div className="flex flex-col gap-[20px]">
          <Check
            onClick={onClickOne}
            active={activeOne}
            option="Include Uppercase Letters"
          />
          <Check
            onClick={onClickTwo}
            active={activeTwo}
            option="Include Lowercase Letters"
          />
          <Check
            onClick={onClickThree}
            active={activeThree}
            option="Include Numbers"
          />
          <Check
            onClick={onClickFour}
            active={activeFour}
            option="Include Symbols"
          />
        </div>
        <Strength
          difficulty={difficulty}
          colorOne={colorOne}
          colorTwo={colorTwo}
          colorThree={colorThree}
          colorFour={colorFour}
        />
        <button
          onClick={generate}
          className="w-full flex items-center justify-center cursor-pointer gap-[24px] p-[24px] border-[#A4FFAF] h-full bg-[#A4FFAF] border-[2px]  hover:bg-transparent hover:text-[#A4FFAF]"
        >
          GENERATE <Image src={arrow} alt="arrow" />
        </button>
      </div>
    </>
  );
}

export default Input;
