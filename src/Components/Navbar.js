import "../index.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="nav_bar">
      <img src={logo} alt="logo"></img>
      <span>Album Manager</span>
    </div>
  );
};

export default Navbar;
