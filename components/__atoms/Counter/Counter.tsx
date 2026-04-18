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
        <input
          type="range"
          className="w-full active:color-[#18171F] cursor-pointer"
          min={4}
          max={20}
          value={count}
          onChange={(e) => slider(+e.target.value)}
        />
      </div>
    </>
  );
}

export default Counter;
