import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { readScreenText } from "../utils/store/readTextSlice";

const RightBar = ({ items }) => {
  const dispatch = useDispatch();
  const { userName, fullName, profileDesc, PROF_IMG } = items;

  const handleReadUserName = () => {
    dispatch(readScreenText(userName));
  };

  const handleReadProfAlt = () => {
    dispatch(readScreenText(`${profileDesc}${userName}`));
  };

  return (
    <div className="col-span-6 my-2 max-lg:hidden">
      <div className="flex justify-start items-center gap-1 mx-2 my-2">
        <Link to={"/feed"}>
          <img
            className="w-16 h-16 object-cover rounded-full cursor-pointer"
            src={PROF_IMG}
            alt={`this is the profile picture of user ${userName}`}
            onClick={handleReadProfAlt}
          />
        </Link>
        <div>
          <Link to={"/feed"}>
            <h3
              className="cursor-pointer font-semibold"
              onClick={handleReadUserName}
            >
              {userName}
            </h3>
          </Link>
          <h3 className="cursor-text text-gray-400">{fullName}</h3>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
