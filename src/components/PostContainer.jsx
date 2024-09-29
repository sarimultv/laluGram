import { otherUser } from "../utils/mockData";
import { loggedInUser } from "../utils/loggedInUser";
import PostCard from "./PostCard";
import RightBar from "./RightBar";

const PostContainer = () => {
  return (
    <div className="lg:col-span-11 md:col-span-11 xs:max-sm:col-span-1 xs:max-sm:px-2">
      <div className="lg:grid lg:grid-flow-col md:grid md:grid-flow-col">
        <div className="lg:col-span-6 lg:items-center lg:m-auto md:col-span-6 md:items-center md:justify-center xs:max-sm:w-max xs:max-sm:m-auto md:my-2 xs:max-sm:col-span-1">
          {otherUser.map((item) => (
            <PostCard key={item.id} item={item} />
          ))}
        </div>
        <RightBar items={loggedInUser} />
      </div>
    </div>
  );
};

export default PostContainer;
