import piChart from "../assets/Media/piChart.svg";
import certificate from "../assets/Media/certificate.svg";
import coins from "../assets/Media/coins.svg";
import video from "../assets/Media/video.svg";
import star from "../assets/Media/star.svg";
import Banner from "./Banner";
import img1 from "../assets/Media/Ellipse 2.svg";
import img2 from "../assets/Media/Ellipse 3.svg";
import img3 from "../assets/Media/Ellipse 4.svg";
import img4 from "../assets/Media/Ellipse 5.svg";

const Header = () => {
  return (
    <div className="section">
      <Banner />
      <div className="lg:h-[312px] grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 mt-12 gap-5 ">
        <div className="lg:row-span-5 bg-[#FBFBFB ] rounded-3xl p-5 border-[0.5px] border-[rgba(2,0,67,0.20)] flex flex-col">
          <div className="flex-grow">
            <h2 className="text-[40px] font-semibold text-primary">90%</h2>
            <p className="max-w-[156px] text-primary text-sm">
              Patient satisfaction rate, reflecting our commitment.
            </p>
          </div>
          <img className="size-[130px] mx-auto mt-5" src={piChart} alt="" />
        </div>

        <div className="lg:row-span-2 lg:col-span-3">
          <h3 className="text-5xl text-primary font-semibold text-center ">
            Comprehensive Care
            <br /> for Every Patient
          </h3>
        </div>

        <div className="lg:row-span-5 rounded-3xl bg-[#FBFBFB ] p-5 border-[0.5px] border-[rgba(2,0,67,0.20)] flex flex-col ">
          <div className="flex-grow">
            <h2 className="text-[40px] font-semibold text-primary">50+</h2>
            <p className="max-w-[156px] text-primary text-sm">
              Free lession video for patient
            </p>
          </div>
          <img className="size-[130px] mx-auto mt-5" src={video} alt="" />
        </div>

        <div className="lg:row-span-3 rounded-3xl bg-[#fffff5] p-5 border-[0.5px] border-[rgba(2,0,67,0.20)] relative">
          <h3 className="text-[40px] font-semibold text-primary">500+</h3>
          <p className="text-sm leading-5 max-w-[122px]">
            Board-certified doctors
          </p>
          <img
            className="size-[77px] absolute bottom-3  right-5"
            src={certificate}
            alt=""
          />
        </div>
        <div className="lg:row-span-3 rounded-3xl bg-[#FBFBFB] p-5 border-[0.5px] border-[rgba(2,0,67,0.20)]">
          <h3 className="text-[40px] font-semibold text-primary flex items-center gap-3">
            4.8 <img src={star} alt="" />
          </h3>
          <p className="text-sm leading-5">Over 20,000 Patient</p>
          <div className="flex mt-5">
            <img src={img1} alt="" />
            <img className="-ml-4" src={img2} alt="" />
            <img className="-ml-4" src={img3} alt="" />
            <img className="-ml-4" src={img4} alt="" />
          </div>
        </div>
        <div className="lg:row-span-3 rounded-3xl bg-[#FFFFF5] p-5 border-[0.5px] border-[rgba(2,0,67,0.20)] relative   ">
          <h3 className="text-[40px] font-semibold text-primary">$5000</h3>
          <p className="text-sm leading-5 max-w-[122px]">
            Money spend for poor patient
          </p>
          <img
            className="size-[77px] absolute bottom-3  right-5"
            src={coins}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
