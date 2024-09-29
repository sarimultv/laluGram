import PostReaction from "./PostReaction";
import { useDispatch } from "react-redux";
import { readScreenText } from "../utils/store/readTextSlice";
import { useState } from "react";

const PostCard = (props) => {
  const [numberOfLike, setNumberOfLike] = useState(0);
  const [numberOfComment, setNumberOfComment] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const {
    userPost,
    postsAlt,
    userName,
    userAltImg,
    profileDesc,
    POST_IMG,
    PROF_IMG,
  } = props.item;

  const dispatch = useDispatch();

  const handleReadPostsAlt = () => {
    dispatch(readScreenText(`${postsAlt}${userName}`));
  };
  const handleMoreBtn = () => {
    setIsClicked(!isClicked);
  };

  const handleReadBtn = () => {
    dispatch(readScreenText(userPost));
  };

  const handleReadUserName = () => {
    dispatch(readScreenText(userName));
  };

  const handleReadProfAlt = () => {
    dispatch(readScreenText(`${profileDesc}${userName}`));
  };

  return (
    <div className="xs:max-sm:w-[23rem] xs:max-sm:px-1 lg:w-[30rem] lg:ml-[3rem] md:w-[30rem] md:ml-[3rem] sm:w-[30rem] sm:ml-[3rem] mb-2 border-b">
      <div className="flex justify-between items-center gap-1 my-2">
        <div className="flex justify-start items-center gap-1 my-2">
          <img
            className="w-16 h-16 object-cover rounded-full cursor-pointer"
            src={PROF_IMG}
            alt={userAltImg}
            onClick={handleReadProfAlt}
          />

          <h3
            className="cursor-pointer font-semibold"
            onClick={handleReadUserName}
          >
            {userName}
          </h3>
        </div>
        <div>
          <p className="cursor-pointer">•••</p>
        </div>
      </div>

      <div className="border border-gray-500 rounded flex justify-center my-3">
        <img
          className="object-cover shadow-lg w-[25rem] h-[25rem]"
          src={POST_IMG}
          alt={postsAlt}
          onClick={handleReadPostsAlt}
        />
      </div>

      <PostReaction
        numberOfLike={numberOfLike}
        setNumberOfLike={setNumberOfLike}
        numberOfComment={numberOfComment}
        setNumberOfComment={setNumberOfComment}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <span className="my-2 cursor-pointer font-semibold hover:font-bold">
        {numberOfLike} likes
      </span>
      <div className="my-2 w-full">
        <span
          className="cursor-pointer font-semibold mr-2"
          onClick={handleReadUserName}
        >
          {userName}☑
        </span>
        <span className="cursor-text">
          {isClicked
            ? userPost
            : `${userPost.split("").splice(0, 50).join("")} ...`}
        </span>
        {isClicked ? null : (
          <span
            className="cursor-pointer hover:text-xl"
            onClick={handleMoreBtn}
          >
            more
          </span>
        )}
        <span
          className="text-gray-600 p-1 cursor-pointer flex justify-end "
          onClick={handleReadBtn}
        >
          Read Post
        </span>
      </div>
      <div className="my-2">
        {isOpen ? (
          <p className="cursor-pointer hover:text-xl">
            View all {numberOfComment} comments
          </p>
        ) : (
          <input
            className="border-t m-2 p-2 outline-gray-700 w-full bg-transparent"
            type="text"
            placeholder="Add a comment"
          />
        )}
      </div>
    </div>
  );
};

export default PostCard;
