import heroImg from "../assets/Media/Rectangle 5.png";

const Banner = () => {
  return (
    <div className="section mt-10 relative">
      <div className="absolute inset-0 bg-[#C7DBE5]/20 rounded-[48px]"></div>
      <img className="w-full h-[470px] rounded-[48px]" src={heroImg} alt="" />
    </div>
  );
};

export default Banner;
