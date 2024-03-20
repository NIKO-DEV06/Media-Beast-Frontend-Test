import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-center mt-[1.9rem] gap-[0.35rem] [&>*:nth-child(odd)]:cursor-pointer [&>*:nth-child(even)]:cursor-pointer">
      <div className="socials">
        <FaFacebookF size={18} />
      </div>
      <div className="socials">
        <FaXTwitter size={18} />
      </div>
      <div className="socials">
        <FaInstagram size={18} />
      </div>
      <div className="socials">
        <FaYoutube size={18} />
      </div>
      <div className="socials">
        <FaTiktok size={18} />
      </div>
      <div className="socials">
        <FaWhatsapp size={18} />
      </div>
      <div className="socials">
        <FaSnapchatGhost size={18} />
      </div>
    </div>
  );
};

export default Socials;
