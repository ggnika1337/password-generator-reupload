"use client";
import Input from "@/components/__molecules/Input/Input";
import Output from "@/components/__molecules/Output/Output";
import React, { useEffect, useState } from "react";

function Container() {
  const [password, setPassword] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [length, setLength] = useState<number>(8);
  const [colorOne, setColorOne] = useState<string>("transparent");
  const [colorTwo, setColorTwo] = useState<string>("transparent");
  const [colorThree, setColorThree] = useState<string>("transparent");
  const [colorFour, setColorFour] = useState<string>("transparent");
  const [difficulty, setDifficulty] = useState<string>("");
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

  function handleChecks() {
    let strength = Object.values(checks).filter((item) => item === true).length;
    if (strength === 0) {
      setColorOne("transparent");
      setDifficulty("");
    } else if (strength === 1) {
      setDifficulty("too weak!");
      setColorOne("#F64A4A");
      setColorTwo("transparent");
      setColorThree("transparent");
      setColorFour("transparent");
    } else if (strength === 2) {
      setDifficulty("weak");
      setColorOne("#FB7C58");
      setColorTwo("#FB7C58");
      setColorThree("transparent");
      setColorFour("transparent");
    } else if (strength === 3) {
      setDifficulty("medium");
      setColorOne("#F8CD65");
      setColorTwo("#F8CD65");
      setColorThree("#F8CD65");
      setColorFour("transparent");
    } else if (strength === 4) {
      setDifficulty("strong");
      setColorOne("#A4FFAF");
      setColorTwo("#A4FFAF");
      setColorThree("#A4FFAF");
      setColorFour("#A4FFAF");
    }
  }

  useEffect(() => {
    handleChecks();
  }, [checks]);

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
            if (selected.includes("uppercase")) {
              return;
            } else {
              setSelected((prev) => [...prev, "uppercase"]);
            }
            console.log(selected);
          }}
          onClickTwo={() => {
            setChecks((prev) => ({ ...prev, lowercase: !prev.lowercase }));
            if (selected.includes("lowercase")) {
              return;
            } else {
              setSelected((prev) => [...prev, "lowercase"]);
            }
            console.log(selected);
          }}
          onClickThree={() => {
            setChecks((prev) => ({ ...prev, symbols: !prev.symbols }));
            if (selected.includes("symbols")) {
              return;
            } else {
              setSelected((prev) => [...prev, "symbols"]);
            }
            console.log(selected);
          }}
          onClickFour={() => {
            setChecks((prev) => ({ ...prev, numbers: !prev.numbers }));
            if (selected.includes("numbers")) {
              return;
            } else {
              setSelected((prev) => [...prev, "numbers"]);
            }
            console.log(selected);
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
