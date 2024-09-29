import { HiMiniHome } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsCameraReelsFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import ToggleText from "./ToggleText";
import ToggleTheme from "./ToggleTheme";

const LeftBar = () => {
  return (
    <div className="lg:col-span-1 md:col-span-1 border-r lg:ml-2 md:ml-2 lg:mr-4 lg:p-2 md:mr-4 md:p-2 max-sm:hidden">
      <div className="ml-3 mr-3 sticky top-8">
        <Link to={"/"}>
          <h1 className="font-bold mt-5 text-3xl cursor-pointer">
            <p className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden">
              laluGram
            </p>
          </h1>
        </Link>
        <ul className="text-lg mt-5">
          <Link to={"/"}>
            <li className="flex gap-2 items-center hover:bg-yellow-400 hover:text-black rounded text-3xl my-3 lg:p-2 md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2 sm:max-md:flex sm:max-md:justify-center xs:max-sm:flex xs:max-sm:justify-center">
              <HiMiniHome size={28} className="md:shrink-0" />{" "}
              <p className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden">
                Home
              </p>
            </li>
          </Link>
          <li className="flex gap-2 items-center cursor-pointer hover:bg-yellow-400 hover:text-black rounded text-3xl my-3 lg:p-2 md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2 sm:max-md:flex sm:max-md:justify-center xs:max-sm:flex xs:max-sm:justify-center">
            <IoIosSearch size={28} className="md:shrink-0" />
            <p className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden">
              Search
            </p>
          </li>
          <li className="flex gap-2 items-center cursor-pointer hover:bg-yellow-400 hover:text-black rounded text-3xl my-3 lg:p-2 md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2 sm:max-md:flex sm:max-md:justify-center xs:max-sm:flex xs:max-sm:justify-center">
            <BsCameraReelsFill size={28} className="md:shrink-0" />
            <p className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden">
              Reels
            </p>
          </li>
          <li className="flex gap-2 items-center cursor-pointer hover:bg-yellow-400 hover:text-black rounded text-3xl my-3 lg:p-2 md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2 sm:max-md:flex sm:max-md:justify-center xs:max-sm:flex xs:max-sm:justify-center">
            <MdOutlineExplore size={28} className="md:shrink-0" />
            <p className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden">
              Explore
            </p>
          </li>
          <li className="flex gap-2 items-center cursor-pointer hover:bg-yellow-400 hover:text-black rounded text-3xl my-3 lg:p-2 md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2 sm:max-md:flex sm:max-md:justify-center xs:max-sm:flex xs:max-sm:justify-center">
            <TiMessages size={28} className="md:shrink-0" />{" "}
            <p className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden">
              Messages
            </p>
          </li>
          <li className="flex gap-2 items-center cursor-pointer rounded text-3xl my-3 hover:bg-yellow-400 hover:text-black lg:p-2 md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2 sm:max-md:flex sm:max-md:justify-center xs:max-sm:flex xs:max-sm:justify-center">
            <FaRegHeart size={28} />{" "}
            <p className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden">
              Notifications
            </p>
          </li>
          <li className="my-3 flex items-center gap-4 lg:p-2 md:max-md:visible sm:max-md:flex-col xs:max-sm:flex-col sm:max-md:flex md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2 sm:max-md:justify-center xs:max-sm:flex xs:max-sm:justify-center">
            <ToggleText />
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
