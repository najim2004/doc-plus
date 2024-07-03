import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import Img1 from "../assets/Media/Rectangle 27-2.png";
import Img2 from "../assets/Media/Rectangle 27-1.png";
import Img3 from "../assets/Media/Rectangle 27.png";
const Service = () => {
  return (
    <div className="section mt-[160px] grid grid-cols-1 lg:grid-cols-2 gap-7 bg-[#FFFFF5] p-10 rounded-[32px]">
      <SectionTitle
        btn="Service"
        title="Empowering Health, Enriching Lives"
        desc="We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness."
        btn2="Appointment"
      />
      <ServiceCard
        img={Img1}
        title={"Advanced Technology"}
        desc="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
      />
      <ServiceCard
        img={Img2}
        title={"Online Doctor Meet"}
        desc="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
      />
      <ServiceCard
        img={Img3}
        title={"Consultancy your health"}
        desc="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
      />
    </div>
  );
};

export default Service;
