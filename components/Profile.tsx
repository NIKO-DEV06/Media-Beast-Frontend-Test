import Image from "next/image";
import logo from "@/assets/logo.png";
import user from "@/assets/user.png";
import Socials from "./Socials";
import Shows from "./Shows";
import Lives from "./Lives";
import YoutubeShorts from "./YoutubeShorts";
import Events from "./Events";

const Profile = () => {
  return (
    <div className="bg-[#1D1D1D] py-[3rem] px-[5rem] rounded-[15px] ">
      <Image
        src={logo}
        width={500}
        height={500}
        className="w-[165px] mx-auto"
        alt="djayday-logo"
      />
      <Image
        src={user}
        width={380}
        height={380}
        className="rounded-[15px] mt-[2rem]"
        alt="user-profile"
      />
      <Socials />
      <Shows />
      <Lives />
      <YoutubeShorts />
      <Events />
    </div>
  );
};

export default Profile;
