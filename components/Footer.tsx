import Image from "next/image";
import bloco from "@/assets/bloco.svg";
import bloco2 from "@/assets/bloco2.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center mt-[3rem]">
      <div>
        <div className="flex items-center bg-white/30 gap-[0.7rem] px-[0.8rem] py-[0.6rem] rounded-full cursor-pointer">
          <div className="bg-black px-[0.9rem] py-[0.7rem] rounded-full">
            <Image
              src={bloco}
              width={200}
              height={200}
              className="w-[1.1rem]"
              alt="bloco-alt"
            />
          </div>
          <p className="uppercase text-[11.5px] font-apercu-medium tracking-widest pr-[0.5rem]">
            Create a BLOCO.me
          </p>
        </div>
        <div className="flex justify-center mt-[2rem] gap-[0.4rem]">
          <p className="font-apercu-regular tracking-widest text-[10px]">
            POWERED BY
          </p>
          <Image
            width={200}
            height={200}
            className="w-[2.5rem] cursor-pointer"
            src={bloco2}
            alt="bloco-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
