"use client";
type props = {
  option: string;
  onClick: () => void;
  active: boolean;
};
import Image from "next/image";
import check from "../../../public/Checkmark.svg";

function Check({ option, onClick, active }: props) {
  return (
    <>
      <div onClick={onClick} className="flex gap-[24px] items-center max-md:gap-[18px]">
        <div
          className={`min-w-[20px] min-h-[20px] flex items-center justify-center border-1 p-[3px]`}
          style={{
            border: active ? "none" : "2px solid #E6E5EA",
            backgroundColor: active ? "#A4FFAF" : "transparent",
          }}
        >
          <Image
            style={{
              display: active ? "block" : "none",
            }}
            src={check}
            alt="checkmark"
            className={`w-full h-full`}
          />
        </div>
        <h1 className="text-white font-bold text-[18px] max-md:text-[15px]">{option}</h1>
      </div>
    </>
  );
}

export default Check;
