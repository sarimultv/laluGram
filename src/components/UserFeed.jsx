import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { loggedInUser } from "../utils/loggedInUser";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

const UserFeed = () => {
  return (
    <div className="col-span-11 lg:ml-3 md:ml-3 mb-6">
      <UserProfile items={loggedInUser} />

      <div className="md:w-[62rem]">
        <div className="border-t flex justify-center items-center p-2 gap-1 cursor-pointer">
          <BsFillGrid3X3GapFill />
          <span className="font-semibold uppercase">posts</span>
        </div>
        <div className="flex flex-wrap justify-center gap-1 w-full lg:p-2 md:p-2">
          {loggedInUser.POST_IMG.map((userItem) => (
            <Link key={userItem.id} to={`/postView/${userItem.id}`}>
              <img
                className="xs:max-md:w-[11rem] xs:max-md:h-[11rem] md:w-[20rem] md:h-[20rem] lg:w-[20rem] lg:h-[20rem] rounded shadow-lg"
                src={userItem.imgSrc}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFeed;
