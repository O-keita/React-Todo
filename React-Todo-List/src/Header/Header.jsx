import "./header.css";
import logo from "../Assets/TECHVERSE GAMBIA.png";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img src={logo} alt="" />
        <span>TechVerse Gambia</span>
      </div>
      <div className="controls">
        <input type="text" placeholder="Item..." className="input" />
        <button>Add</button>
      </div>
    </div>
  );
};

export default Header;
