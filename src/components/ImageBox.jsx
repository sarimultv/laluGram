import { useDispatch } from "react-redux";
import { readScreenText } from "../utils/store/readTextSlice";

const ImageBox = (props) => {
  const {
    userName,
    postsAlt,
    userPost,
    userAltImg,
    POST_IMG,
    PROF_IMG,
    profileDesc,
  } = props;

  const dispatch = useDispatch();

  const handleReadPostsAlt = () => {
    dispatch(readScreenText(`${postsAlt}${userName} about ${userPost}`));
  };

  const handleReadUserName = () => {
    dispatch(readScreenText(userName));
  };

  const handleReadProfAlt = () => {
    dispatch(readScreenText(`${profileDesc}${userName}`));
  };

  return (
    <>
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
    </>
  );
};

export default ImageBox;
