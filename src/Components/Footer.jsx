import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoLight from "../assets/Media/logo light.png";

const Footer = () => {
  return (
    <div className="mt-[160px] bg-primary h-[442px] ">
      <div className="section flex flex-col justify-center h-full">
        <img src={logoLight} alt="" className="h-8 w-[124px]" />
        <div className="flex justify-between text-[#FFFFF5]/80 mt-8">
          <div className="space-y-9">
            <h3>
              123 Main Street Anytown, USA
              <br /> Postal Code: 12345
            </h3>
            <h3>
              Support: support@oyolloo.com <br /> (Available : 10:00am to
              07:00pm)
            </h3>
          </div>
          <div className="">
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Success Page</a>
              </li>
              <li>
                <a href="/">Terms and condition</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="space-y-4  text-sm font-semibold">
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Scheduling</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Patient Portal</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className=" text-sm font-semibold">Follow</h3>
            <div className=" flex gap-6 *:size-7 mt-3">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>
            <h3 className="mt-12">@docplus 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
