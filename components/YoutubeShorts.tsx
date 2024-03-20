import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import short1 from "@/assets/short1.png";
import short2 from "@/assets/short2.png";

const YoutubeShorts = () => {
  return (
    <div className="mt-[2.5rem]">
      <div className="bg-gradient-to-r from-[#323232] via-[#323232] to-[#0D0D0D] flex gap-[6rem] items-center px-[1rem] py-[0.35rem] rounded-full">
        <div className="bg-[#FF0000] h-[10px] w-[10px] rounded-full"></div>
        <p className="text-[12.5px] font-apercu-regular tracking-widest">
          YOUTUBE SHORTS
        </p>
      </div>

      <div className="flex relative justify-between mt-[2rem]">
        <div className="absolute right-0 bottom-1/2 translate-y-1/2 bg-black p-[0.5rem] rounded-full translate-x-1/2 cursor-pointer">
          <GoArrowRight size={25} />
        </div>
        <Image
          src={short1}
          width={400}
          height={400}
          className="w-[178px] rounded-[10px]"
          alt="short-1"
        />
        <Image
          src={short2}
          width={400}
          height={400}
          className="w-[178px] rounded-[10px]"
          alt="short-2"
        />
      </div>
    </div>
  );
};

export default YoutubeShorts;
