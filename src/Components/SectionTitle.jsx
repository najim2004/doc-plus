import PropTypes from "prop-types";
import { FiArrowUpRight } from "react-icons/fi";

const SectionTitle = ({ btn, title, desc, btn2 }) => {
  return (
    <div>
      <button className="btn">{btn}</button>
      <h2 className="text-4xl font-semibold leading-[56px] text-primary my-4 max-w-[396px]">
        {title}
      </h2>
      <p className="text-[#4D4C7B] leading-6 max-w-[470px] mb-[45px]">{desc}</p>
      <button className="bg-primaryBtn px-5 py-3 text-black font-medium rounded-xl flex gap-3 items-center ">
        {btn2} <FiArrowUpRight />
      </button>
    </div>
  );
};

SectionTitle.propTypes = {
  btn: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  btn2: PropTypes.string,
};

export default SectionTitle;
