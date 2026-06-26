"use client";
import Input from "@/components/__molecules/Input/Input";
import Output from "@/components/__molecules/Output/Output";
import React, { useState } from "react";

const strengthColors = {
  empty: ["transparent", "transparent", "transparent", "transparent"],
  tooWeak: ["#F64A4A", "transparent", "transparent", "transparent"],
  weak: ["#FB7C58", "#FB7C58", "transparent", "transparent"],
  medium: ["#F8CD65", "#F8CD65", "#F8CD65", "transparent"],
  strong: ["#A4FFAF", "#A4FFAF", "#A4FFAF", "#A4FFAF"],
};

function getStrengthState(enabledOptions: number) {
  if (enabledOptions === 1) {
    return { difficulty: "too weak!", colors: strengthColors.tooWeak };
  }

  if (enabledOptions === 2) {
    return { difficulty: "weak", colors: strengthColors.weak };
  }

  if (enabledOptions === 3) {
    return { difficulty: "medium", colors: strengthColors.medium };
  }

  if (enabledOptions === 4) {
    return { difficulty: "strong", colors: strengthColors.strong };
  }

  return { difficulty: "", colors: strengthColors.empty };
}

function Container() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(8);
  const [checks, setChecks] = useState<{
    uppercase: boolean;
    lowercase: boolean;
    symbols: boolean;
    numbers: boolean;
  }>({
    uppercase: false,
    lowercase: false,
    symbols: false,
    numbers: false,
  });

  const enabledOptions = Object.values(checks).filter(Boolean).length;
  const { difficulty, colors } = getStrengthState(enabledOptions);
  const [colorOne, colorTwo, colorThree, colorFour] = colors;

  function handleGeneration() {
    let selectedCharacters = "";
    if (checks.uppercase) selectedCharacters += "QWERTYUIOPLKJHGFDSAZXCVBNM";
    if (checks.lowercase) selectedCharacters += "qwertyuioplkjhgfdsazxcvbnm";
    if (checks.numbers) selectedCharacters += "1234567890";
    if (checks.symbols) selectedCharacters += "[]{}()-_+=;:,.<>?";
    if (selectedCharacters === "") {
      return;
    }
    let output = "";
    for (let i = 0; i < length; i++) {
      output =
        output +
        selectedCharacters[
          Math.floor(Math.random() * selectedCharacters.length)
        ];
    }
    setPassword(output);
  }

  return (
    <>
      <div className="flex flex-col w-full gap-[15px] max-w-[540px] items-center">
        <h1 className="text-[#817D92] font-700 text-[24px] max-md:text-[16px]">
          Password Generator
        </h1>
        <Output output={password} />
        <Input
          count={length}
          slider={(val) => setLength(val)}
          generate={handleGeneration}
          colorOne={colorOne}
          colorTwo={colorTwo}
          colorThree={colorThree}
          colorFour={colorFour}
          onClickOne={() => {
            setChecks((prev) => ({ ...prev, uppercase: !prev.uppercase }));
          }}
          onClickTwo={() => {
            setChecks((prev) => ({ ...prev, lowercase: !prev.lowercase }));
          }}
          onClickThree={() => {
            setChecks((prev) => ({ ...prev, numbers: !prev.numbers }));
          }}
          onClickFour={() => {
            setChecks((prev) => ({ ...prev, symbols: !prev.symbols }));
          }}
          activeOne={checks.uppercase}
          activeTwo={checks.lowercase}
          activeThree={checks.symbols}
          activeFour={checks.numbers}
          difficulty={difficulty}
        />
      </div>
    </>
  );
}

export default Container;
