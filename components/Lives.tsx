import Image from "next/image";
import mixtapeImage from "@/assets/mixtape.png";
import cloud from "@/assets/cloud.svg";

const Lives = () => {
  return (
    <div className="mt-[2.5rem]">
      <div className="bg-gradient-to-r from-[#323232] via-[#323232] to-[#0D0D0D] flex gap-[3.1rem] items-center px-[1rem] py-[0.35rem] rounded-full">
        <div className="bg-[#FF8600] h-[10px] w-[10px] rounded-full"></div>
        <p className="text-[12.5px] font-apercu-regular tracking-widest">
          NEW MIX LIVE - TAKE A LISTEN
        </p>
      </div>
      <div className="bg-[#FF4000] flex gap-[1rem] rounded-[20px] px-[1.3rem] py-[1rem] mt-[2rem] w-[23.7rem]">
        <Image
          src={mixtapeImage}
          width={500}
          height={500}
          className="w-[120px] h-[120px] rounded-[20px]"
          alt="mixtape-img"
        />
        <div className="font-apercu-medium text-[13.5px] flex flex-col justify-between">
          <div className="flex justify-between">
            <p className="font-apercu-regular text-[#FFC6B2] bg-[#FF6531] px-[0.5rem] py-[0.1rem] rounded-full">
              DJ DAY DAY
            </p>
            <Image src={cloud} width={25} height={25} alt="cloud-svg" />
          </div>
          <p className="">
            @DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment, Afro
            Beats + UK Rap)
          </p>
          <p className="text-[#FFC6B2]">19 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Lives;
