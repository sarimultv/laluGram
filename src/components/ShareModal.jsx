import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const ShareModal = (props) => {
  const { share, setShare } = props;
  const handleCloseBtn = () => {
    setShare(!share);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center xs:max-md:p-2">
      <div className="bg-white text-black rounded-lg lg:p-6 md:p-6 md:w-1/2 lg:w-1/2 xs:max-md:p-2 xs:max-sm:w-max">
        <p>Share on Social Media</p>
        <div className="flex justify-center items-center my-2 py-2">
          <span
            className="p-4 cursor-pointer shadow-lg mr-4 bg-yellow-400 rounded-full hover:bg-black hover:text-white"
            //   onClick={handleCloseBtn}
          >
            <FaFacebookF />
          </span>
          <span
            className="p-4 cursor-pointer shadow-lg mr-2 bg-yellow-400 rounded-full hover:bg-black hover:text-white"
            //   onClick={handleCloseBtn}
          >
            <RiTwitterXFill />
          </span>
        </div>

        <button
          className="px-4 py-2 bg-yellow-400 text-black rounded mt-8 hover:bg-black hover:text-white"
          onClick={handleCloseBtn}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
