import img1 from "../assets/Media/Ellipse 2.svg";
import img2 from "../assets/Media/Ellipse 3.svg";
import img3 from "../assets/Media/Ellipse 4.svg";
import TestimonialCad from "./TestimonialCad";

const testimonials = [
  {
    id: 1,
    title: "Expertise and Compassion Combined",
    description:
      "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    name: "Sarah D",
    profession: "IT Professional",
    img: img1,
  },
  {
    id: 2,
    title: "Life-Saving Care, Life-Changing Experience",
    description:
      "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
    name: "Michael R",
    profession: "Business Executive",
    img: img2,
  },
  {
    id: 3,
    title: "A Partner in Health and Wellness",
    description:
      "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
    name: "David S",
    profession: "Lawyer",
    img: img3,
  },
];
const Testimonial = () => {
  return (
    <div className="section mt-[160px]">
      <div className="">
        <button className="btn">Testimonial</button>
        <h3 className="mt-4 mb-7 text-primary text-[36px] font-semibold">
          What they say about us
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {testimonials?.map((item) => (
          <TestimonialCad key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
