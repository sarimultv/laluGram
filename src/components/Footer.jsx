import ToggleText from "./ToggleText";

const Footer = () => {
  return (
    <div className="text-center">
      <div className="sm:hidden xs:max-sm:mt-3">
        <ToggleText />
      </div>
      <p className="py-8">© 2024 lalugram, Inc. All rights reserved.</p>
    </div>
  );
};

export default Footer;
