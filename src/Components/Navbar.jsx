import { FiArrowUpRight } from "react-icons/fi";
import logoDark from "../assets/Media/logo dark.png";
const Navbar = () => {
  const menu = (
    <>
      <li>
        <a to={"/"}>Home</a>
      </li>
      <li>
        <a to={"/"}>Service</a>
      </li>
      <li>
        <a to={"/"}>Blog</a>
      </li>
      <li>
        <a to={"/"}>About us</a>
      </li>
    </>
  );
  return (
    <div className="h-12 section mt-7  flex justify-between *:flex-1">
      <div className="">
        <img src={logoDark} alt="" className="h-8" />
      </div>
      <div className="">
        <ul className="flex h-full justify-between items-center text-primary">
          {menu}
        </ul>
      </div>
      <div className="flex justify-end ">
        <button className="flex justify-center gap-2 h-12 w-[174px] rounded-xl border-[1px] border-secondary font-medium text-primary items-center">
          Appointment <FiArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
