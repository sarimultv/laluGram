import { TbTextSize } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  decreaseTextSize,
  increaseTextSize,
} from "../utils/store/toggleTextSlice";

const ToggleText = () => {
  const dispatch = useDispatch();

  const handleIncreaseTextSize = () => {
    dispatch(increaseTextSize());
  };

  const handleDecreaseTextSize = () => {
    dispatch(decreaseTextSize());
  };

  return (
    <>
      <span
        className="text-5xl cursor-pointer bg-gray-950 rounded text-white px-3 pb-2 xs:max-sm:mr-2 hover:text-black hover:bg-yellow-400"
        onClick={handleDecreaseTextSize}
      >
        -
      </span>
      <TbTextSize
        size={28}
        className="md:max-md:visible sm:max-md:hidden xs:max-sm:hidden"
      />
      <span
        className="text-5xl cursor-pointer bg-gray-950 rounded text-white px-2 pb-2 hover:text-black hover:bg-yellow-400"
        onClick={handleIncreaseTextSize}
      >
        +
      </span>
    </>
  );
};

export default ToggleText;
