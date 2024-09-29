import { MdLightMode } from "react-icons/md";
import { toggleTheme } from "../utils/store/toggleThemeSlice";
import { useDispatch } from "react-redux";

const ToggleTheme = () => {
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <span className="flex gap-2 items-center rounded md:max-lg:p-2 sm:max-md:p-2 xs:max-sm:p-2">
      <MdLightMode
        size={40}
        className="cursor-pointer"
        onClick={handleToggleTheme}
      />
    </span>
  );
};

export default ToggleTheme;
