"use client";
type props = {
  count: number;
  slider: () => void;
};

function Counter({ count, slider }: props) {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-[700] text-[18px] text-white">Character Length</h1>
        <h1 className="text-[#A4FFAF] font-[700] text-[32px]">{count}</h1>
      </div>
      <div className="bg-[#18171F] h-[8px] w-full relative flex items-center">
        <div className="bg-[#A4FFAF] h-[8px] items-center flex relative">
          <div
            onClick={slider}
            className="bg-[#E6E5EA] rounded-full justify-self-end flex size-[28px] hover:bg-[#18171F] border-transparent border-[2px] hover:border-[#A4FFAF]"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Counter;
