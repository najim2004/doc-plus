import PropTypes from "prop-types";
import { FiArrowUpRight } from "react-icons/fi";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className="relative">
      <img src={img} alt="" className="min-w-full h-[394px] rounded-[30px]" />
      <div className="bg-primary/60 rounded-[20px] w-[321px] h-[144px] p-5 absolute bottom-5 left-5">
        <h3 className="text-[#FFFFF5] text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-end justify-between">
          <p className="text-[#FFFFF5] text-xs leading-[18px] max-w-[219px]">
            {desc}
          </p>
          <button className="bg-primaryBtn size-12 rounded-full flex justify-center items-center text-white -mb-4">
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ServiceCard;
