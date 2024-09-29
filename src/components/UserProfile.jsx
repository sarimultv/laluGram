import { readScreenText } from "../utils/store/readTextSlice";
import { useDispatch } from "react-redux";

const UserProfile = ({ items }) => {
  const dispatch = useDispatch();
  const {
    noOfPost,
    noOfFollower,
    noOfFollowing,
    userName,
    fullName,
    profileDesc,
    PROF_IMG,
  } = items;

  const handleReadUserName = () => {
    dispatch(readScreenText(userName));
  };

  const handleReadProfAlt = () => {
    dispatch(readScreenText(`${profileDesc}${userName}`));
  };

  return (
    <div className="xs:max-md:col-span-1 md:w-5/6 my-6 flex items-center ">
      <div className="xs:max-md:col-span-1 xs:max-md:ml-5 md:w-4/12 md:ml-14">
        <img
          className="xs:max-md:w-[9rem] xs:max-md:h-[7rem] md:w-36 md:h-36 object-cover rounded-full cursor-pointer"
          src={PROF_IMG}
          onClick={handleReadProfAlt}
        />
      </div>
      <div className="xs:max-md:col-span-1 xs:max-md:ml-5 md:w-8/12 md:m-auto my-2">
        <div className="flex justify-start items-center">
          <h3
            className="cursor-pointer font-semibold mr-4"
            onClick={handleReadUserName}
          >
            {userName}
          </h3>
          <button className="bg-gray-900 rounded-lg text-white px-2 py-1">
            Edit profile
          </button>
        </div>
        <div className="xs:max-md:gap-4 xs:max-md:pr-2 flex items-center lg:gap-10 md:gap-10 my-2">
          <p className="xs:max-sm:text-center">{noOfPost} posts</p>
          <p className="xs:max-sm:text-center">{noOfFollower} followers</p>
          <p className="xs:max-sm:text-center">{noOfFollowing} following</p>
        </div>
        <div className="my-2">
          <span className="font-semibold cursor-text">{fullName}</span>
        </div>
        <div className="my-3">
          <span className="rounded-xl bg-gray-900 text-white px-2 py-1 cursor-pointer">
            @{userName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
