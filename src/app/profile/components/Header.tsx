import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-[16px]">
      <div className="flex gap-[8px] text-[#09090B]">
        <Coffee />
        <p className="text-[16px] font-bold">Buy Me Coffee</p>
      </div>
      <div>
        <Button variant="outline">Log Out</Button>
      </div>
    </div>
  );
}
