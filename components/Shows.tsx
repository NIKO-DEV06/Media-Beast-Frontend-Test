import radioShowImage from "@/assets/radio-show.png";
import youtubeChannelImage from "@/assets/youtube-channel.png";
import merchandiseImage from "@/assets/merchandise.png";
import Image from "next/image";
import { ShowInterface } from "@/interfaces";

const Shows = () => {
  const shows: ShowInterface[] = [
    {
      id: 1,
      name: "BBC 1XTRA Radio Shows",
      img: radioShowImage,
    },
    {
      id: 2,
      name: "DJ DAY DAY Youtube Channel",
      img: youtubeChannelImage,
    },
    {
      id: 3,
      name: "DJ DAY DAY Mechandise",
      img: merchandiseImage,
    },
  ];
  return (
    <div className="mt-[1.5rem]">
      <div className="bg-gradient-to-r from-[#323232] via-[#323232]  to-[#0D0D0D] flex gap-[2.3rem] items-center px-[1rem] py-[0.35rem] rounded-full">
        <div className="bg-[#FF4000] h-[10px] w-[10px] rounded-full"></div>
        <p className="text-[12.5px] font-apercu-regular tracking-widest">
          Award winning DJ & Radio Presenter
        </p>
      </div>
      <div className="mt-[1.7rem] flex flex-col gap-[1.4rem] [&>*:nth-child(odd)]:cursor-pointer [&>*:nth-child(even)]:cursor-pointer">
        {shows.map((show) => (
          <div
            key={show.id}
            className="bg-black flex items-center gap-[2.2rem] rounded-full"
          >
            <Image
              src={show.img}
              width={500}
              height={500}
              className="w-[70px] h-[70px] py-[0.5rem] px-[0.5rem]"
              alt=""
            />
            <p className="text-[13.5px] font-apercu-regular tracking-wider">
              {show.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
