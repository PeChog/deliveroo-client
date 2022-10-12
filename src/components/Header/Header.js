import logo from "../../assets/Images/Deliveroo_logo.png";

import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img alt="logo" src={logo} />
      </div>
    </div>
  );
};

export default Header;
