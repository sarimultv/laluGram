import { GoHeart } from "react-icons/go";
import { MdModeComment, MdOutlineModeComment } from "react-icons/md";
import { FaHeart, FaRegShareSquare, FaShareSquare } from "react-icons/fa";
import { useState } from "react";
import { BsSave2, BsSave2Fill } from "react-icons/bs";

const PostReaction = (props) => {
  const [isShare, setIsShare] = useState(false);

  const handleShareBtn = () => {
    setIsShare(!isShare);
  };

  const [isSaved, setIsSaved] = useState(false);

  const handleSaveBtn = () => {
    setIsSaved(!isSaved);
  };

  const {
    numberOfLike,
    setNumberOfLike,
    numberOfComment,
    setNumberOfComment,
    isOpen,
    setIsOpen,
  } = props;

  const handleLikeBtn = () => {
    setNumberOfLike(numberOfLike + 1);
  };

  const handleCommentBtn = () => {
    setIsOpen(!isOpen);
    setNumberOfComment(numberOfComment + 1);
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex justify-start items-center gap-2">
        <div
          className="cursor-pointer flex items-center gap-1 mr-5 hover:font-semibold"
          onClick={handleLikeBtn}
        >
          {numberOfLike !== 0 ? <FaHeart /> : <GoHeart />} <p>like</p>
        </div>

        <div
          className="cursor-pointer flex items-center gap-1 mr-5 hover:font-semibold"
          onClick={handleCommentBtn}
        >
          {numberOfComment !== 0 ? <MdModeComment /> : <MdOutlineModeComment />}
          comment
        </div>

        <div
          className="cursor-pointer flex items-center gap-1 mr-5 hover:font-semibold"
          onClick={handleShareBtn}
        >
          {isShare ? <FaShareSquare /> : <FaRegShareSquare />} share
        </div>
      </div>
      <div
        className="cursor-pointer flex items-center gap-1 hover:font-semibold"
        onClick={handleSaveBtn}
      >
        {isSaved ? <BsSave2Fill /> : <BsSave2 />}
        <p>save</p>
      </div>
    </div>
  );
};

export default PostReaction;
