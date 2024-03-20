import Image from "next/image";
import event from "@/assets/event.png";

const Events = () => {
  return (
    <div className="mt-[2.5rem]">
      <div className="bg-gradient-to-r from-[#323232] via-[#323232] to-[#0D0D0D] flex gap-[7rem] items-center px-[1rem] py-[0.35rem] rounded-full">
        <div className="bg-[#FFFFFF] h-[10px] w-[10px] rounded-full"></div>
        <p className="text-[12.5px] font-apercu-regular tracking-widest">
          LATEST EVENT
        </p>
      </div>
      <div className="mt-[2rem] relative font-apercu-medium">
        <p className="absolute text-black bg-white px-[0.5rem] py-[0.4rem] rounded-[4px] text-[11px] font-semibold tracking-widest top-[1.2rem] left-[1.3rem]">
          FRI 29TH MAR
        </p>
        <div className="absolute flex flex-col gap-[1.7rem] bottom-[1rem] text-black bg-white/90 mx-[1rem] rounded-[4px] py-[0.5rem] px-[0.8rem]">
          <p className=" text-[1.2rem] tracking-wide">
            30 Years Of Day Day + Donae'O Live! Friday 29th March…
          </p>
          <div className="flex justify-between text-[12.5px] tracking-widest">
            <p>XOYO Birmingham</p>
            <p>FROM £25.00</p>
          </div>
        </div>
        <Image
          src={event}
          width={200}
          height={200}
          className="w-full"
          alt="event"
        />
      </div>
    </div>
  );
};

export default Events;
