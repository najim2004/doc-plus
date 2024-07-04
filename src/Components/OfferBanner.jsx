import { FiArrowUpRight } from "react-icons/fi";
import Img from "../assets/Media/Rectangle 32.png";
import logoLight from "../assets/Media/logo light.png";

const OfferBanner = () => {
  return (
    <div className="section mt-[160px] relative w-full">
      <div className="inset-0 absolute top-0 left-0 bg-gradient-to-r from-primary/90 to-primary/40 rounded-[32px]">
        <div className="relative text-[#FFFFF5] flex flex-col justify-center h-full pl-[60px]">
          <h className="text-[40px] font-semibold leading-[60px]">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h>
          <div className="flex gap-6 mt-6">
            <button className="flex gap-1 justify-center items-center px-4 py-3 rounded-xl bg-primaryBtn text-primary font-medium">
              Appointment <FiArrowUpRight />
            </button>
            <button className="flex justify-center gap-1 px-4 py-3 rounded-xl border-[1px] border-[#FFFFF5] text-[#FFFFF5] items-center">
              Learn More
              <FiArrowUpRight />
            </button>
          </div>
          <img
            src={logoLight}
            alt=""
            className="h-8 w-[124px] absolute top-[66px] right-[60px]"
          />
        </div>
      </div>
      <img className="w-full h-[470px] rounded-[32px]" src={Img} alt="" />
    </div>
  );
};

export default OfferBanner;
