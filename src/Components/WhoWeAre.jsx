import SectionTitle from "./SectionTitle";
import img from "../assets/Media/Rectangle 24.png";
const WhoWeAre = () => {
  return (
    <div className="section mt-[160px] flex justify-between">
      <SectionTitle
        btn="Who we are"
        title="We Help To Get Soultions"
        desc="We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
"
        btn2="Learn more "
      />
      <div className="lg:relative">
        <img
          src={img}
          alt=""
          className="max-w-[568px] h-[415px] rounded-[32px]"
        />
        <div className="bg-[#343268] rounded-[32px] w-[395px] h-[210px] p-7 flex flex-col justify-center lg:absolute -left-[96px] -bottom-[8px]">
          <h3 className="text-white text-2xl font-medium mb-5">
            Our mission is simple
          </h3>
          <p className="text-[rgba(255,255,255,0.80)] leading-6">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
