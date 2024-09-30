import { useRef, useState } from "react";
import PostReaction from "./PostReaction";
import { loggedInUser } from "../utils/loggedInUser";
import { useDispatch } from "react-redux";
import { readScreenText } from "../utils/store/readTextSlice";
import { useParams } from "react-router-dom";
import CommentViewModal from "./CommentViewModal";
import CommentModal from "./CommentModal";

const PostView = () => {
  const [numberOfLike, setNumberOfLike] = useState(0);
  const [numberOfComment, setNumberOfComment] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const { imgId } = useParams();
  const commentInput = useRef();
  const [comment, setComment] = useState(null);
  const [viewComment, setViewComment] = useState(false);

  const { userPost, postsAlt, userName, POST_IMG } = loggedInUser;

  const handleReadPostsAlt = () => {
    dispatch(readScreenText(`${postsAlt}${userName} about ${userPost}`));
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

  const handleCmntView = () => {
    setViewComment(!viewComment);
  };

  const handleTextAreaInp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="lg:col-span-11 lg:w-[30rem] lg:m-auto sm:ml-[3rem] sm:w-[25rem] sm:m-auto xs:max-sm:p-2 md:px-2 lg:px-2">
      <div className="border border-gray-500 rounded flex justify-center my-3 xs:max-sm:w-5/5">
        {POST_IMG.filter((item) => item.id === imgId).map((im) => (
          <img
            key={im.id}
            className="shadow-lg rounded md:w-[25rem] md:h-[25rem] xs:max-sm:w-max"
            src={im.imgSrc}
            alt={postsAlt}
            onClick={handleReadPostsAlt}
          />
        ))}
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
            className="cursor-pointer hover:text-xl text-gray-600"
            onClick={handleMoreBtn}
          >
            more
          </span>
        )}
        <span
          className="text-gray-500 p-1 cursor-pointer ml-1"
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

export default PostView;
