import PropTypes from "prop-types";
import star from "../assets/Media/star.svg";
const TestimonialCad = ({ item }) => {
  return (
    <div className="p-5 bg-[#FFFFF5] rounded-[16px] flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-3">
          {item?.title}
        </h3>
        <p className="text-xs text-[#4D4C7B] leading-[18px] mb-4">
          {item?.description}
        </p>
      </div>
      <div className="flex gap-3">
        <img src={item?.img} alt="" className="size-[44px] rounded-full" />
        <div className="">
          <h3 className="text-primary font-semibold mb-1">
            {item?.name},
            <span className="text-[#4D4C7B]">{item?.profession}</span>
          </h3>
          <div className="flex gap-1 items-center *:size-[14px]">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCad.propTypes = {
  item: PropTypes.object,
};

export default TestimonialCad;
