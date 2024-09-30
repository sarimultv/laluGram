import { GoHeart } from "react-icons/go";
import { MdModeComment, MdOutlineModeComment } from "react-icons/md";
import { FaHeart, FaRegShareSquare, FaShareSquare } from "react-icons/fa";
import { useState } from "react";

const PostReaction = (props) => {
  const [isShare, setIsShare] = useState(false);

  const handleShareBtn = () => {
    setIsShare(!isShare);
  };

  const { numberOfLike, setNumberOfLike, numberOfComment } = props;

  const handleLikeBtn = () => {
    setNumberOfLike(numberOfLike + 1);
  };
  return (
    <div className="flex justify-between items-center my-2 xs:max-sm:w-4/5">
      <div className="flex justify-start items-center gap-1">
        <div
          className="cursor-pointer flex items-center gap-0 mr-2 hover:font-semibold text-3xl"
          onClick={handleLikeBtn}
        >
          {numberOfLike !== 0 ? <FaHeart /> : <GoHeart />} <p>like</p>
        </div>

        <div className="cursor-pointer flex items-center gap-0 mr-2 hover:font-semibold text-3xl">
          {numberOfComment !== 0 ? <MdModeComment /> : <MdOutlineModeComment />}
          comment
        </div>

        <div
          className="cursor-pointer flex items-center gap-0 mr-2 hover:font-semibold text-3xl"
          onClick={handleShareBtn}
        >
          {isShare ? <FaShareSquare /> : <FaRegShareSquare />} share
        </div>
      </div>
    </div>
  );
};

export default PostReaction;
