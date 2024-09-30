import PostReaction from "./PostReaction";
import { useDispatch } from "react-redux";
import { readScreenText } from "../utils/store/readTextSlice";
import { useRef, useState } from "react";
import CommentModal from "./CommentModal";
import CommentViewModal from "./CommentViewModal";
import ImageBox from "./ImageBox";

const PostCard = (props) => {
  const [numberOfLike, setNumberOfLike] = useState(0);
  const [numberOfComment, setNumberOfComment] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [viewComment, setViewComment] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const commentInput = useRef();
  const [comment, setComment] = useState(null);
  const dispatch = useDispatch();
  const {
    userPost,
    postsAlt,
    userName,
    userAltImg,
    profileDesc,
    POST_IMG,
    PROF_IMG,
  } = props.item;

  const handleMoreBtn = () => {
    setIsClicked(!isClicked);
  };

  const handleReadBtn = () => {
    dispatch(readScreenText(userPost));
  };

  const handleReadUserName = () => {
    dispatch(readScreenText(userName));
  };

  const handleTextAreaInp = () => {
    setIsOpen(!isOpen);
  };

  const handleCmntView = () => {
    setViewComment(!viewComment);
  };

  return (
    <div className="xs:max-sm:w-[23rem] xs:max-sm:px-1 lg:w-[30rem] lg:ml-[3rem] md:w-[30rem] md:ml-[3rem] sm:w-[30rem] sm:ml-[3rem] mb-2 border-b">
      <ImageBox
        userName={userName}
        profileDesc={profileDesc}
        postsAlt={postsAlt}
        userAltImg={userAltImg}
        POST_IMG={POST_IMG}
        PROF_IMG={PROF_IMG}
        userPost={userPost}
      />

      <PostReaction
        numberOfLike={numberOfLike}
        setNumberOfLike={setNumberOfLike}
        numberOfComment={numberOfComment}
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
          className="text-black bg-yellow-400 rounded p-1 cursor-pointer ml-1"
          onClick={handleReadBtn}
        >
          Read Post
        </span>
      </div>
      <div className="my-2">
        {isOpen ? (
          <CommentModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            numberOfComment={numberOfComment}
            setNumberOfComment={setNumberOfComment}
            commentInput={commentInput}
            setComment={setComment}
          />
        ) : (
          <>
            <p className="cursor-pointer text-xl" onClick={handleCmntView}>
              View all {numberOfComment} comments
            </p>
            <textarea
              rows={1}
              className="border-t m-2 p-2 outline-gray-700 w-full bg-transparent"
              type="text"
              placeholder="Add a comment"
              onClick={handleTextAreaInp}
            />
          </>
        )}

        {viewComment ? (
          <CommentViewModal
            viewComment={viewComment}
            setViewComment={setViewComment}
            commentInput={commentInput}
            comment={comment}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PostCard;
