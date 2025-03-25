import { Coffee } from "lucide-react";

export default function Left() {
  return (
    <div className="bg-[#FBBF24] w-1/2 h-[944px] ">
      <div className="flex gap-[8px] text-[#09090B]">
        <Coffee />
        <p className="text-[16px] font-bold">Buy Me Coffee</p>
      </div>
      <div className="gap-[40px] items-center justify-center flex flex-col">
        <div>
          <img src="./logo.svg" alt="" />
        </div>

        <div className="gap-[12px] flex flex-col">
          <p className="font-bold text-[24px] text-[#09090B] w-[455pxd] text-center">
            Fund your creative work
          </p>
          <p className="text-[16px] text-[#09090B] w-[455px]">
            Accept support. Start a membership. Setup a shop. It’s easier than
            you think.
          </p>
        </div>
      </div>
    </div>
  );
}
