import { Link } from "react-router-dom";
import { loggedInUser } from "../utils/loggedInUser";
import { useDispatch } from "react-redux";
import { readScreenText } from "../utils/store/readTextSlice";
import ToggleTheme from "./ToggleTheme";

const Head = () => {
  const { PROF_IMG, userName, profileDesc } = loggedInUser;
  const dispatch = useDispatch();

  const handleReadUserName = () => {
    dispatch(readScreenText(userName));
  };

  const handleReadProfAlt = () => {
    dispatch(readScreenText(`${profileDesc}${userName}`));
  };

  return (
    <div className="grid grid-flow-col p-2 xs:max-lg:visible lg:hidden border-b">
      <div className="col-span-6 flex items-center ml-6">
        <Link to={"/"}>
          <h1 className="font-bold text-3xl cursor-pointer">laluGram</h1>
        </Link>
      </div>
      <div className="col-span-6 flex justify-center items-center gap-1 my-2">
        <img
          className="w-16 h-16 object-cover rounded-full cursor-pointer"
          src={PROF_IMG}
          alt={`this is the profile picture of user ${userName}`}
          onClick={handleReadProfAlt}
        />

        <Link to={"/feed"}>
          <h3
            className="cursor-pointer font-semibold"
            onClick={handleReadUserName}
          >
            {userName}
          </h3>
        </Link>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Head;
