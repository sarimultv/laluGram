import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import { useSelector } from "react-redux";
import Head from "./Head";
import Footer from "./Footer";

const Body = () => {
  const textColor = useSelector((store) => store.app.textColor);
  const bgColor = useSelector((store) => store.app.bgColor);

  const textSize = useSelector((store) => store.toggleTextSize.textSize);

  return (
    <div
      className="font-sans m-auto min-h-screen"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Head />
      <section className={`grid grid-flow-col ${textSize}`}>
        <LeftBar />
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Body;
