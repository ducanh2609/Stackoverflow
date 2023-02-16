import { useState } from "react";
import { Link } from "react-router-dom";
import ToolLeft from "../liteComponents/ToolLeft";

export default function Header() {
  const [toolStyle, setToolStyle] = useState({ display: "none" });

  const [toolI, setToolI] = useState(
    <i className="fa-solid fa-bars fa-lg"></i>
  );

  function menuToggle() {
    if (toolStyle.display === "none") {
      setToolStyle({ display: "block" });
      setToolI(<i className="fa-solid fa-xmark fa-lg"></i>);
    } else {
      setToolStyle({ display: "none" });
      setToolI(<i className="fa-solid fa-bars fa-lg"></i>);
    }
  }

  return (
    <div className="header">
      <div className="header-box">
        <div onClick={menuToggle} className="menu-btn">
          {toolI}
        </div>
        <div className="logo">
          <Link to="/">
            <img src="../image/Overflow_logo.png" alt="" />
          </Link>
        </div>
        <div className="about-link">
          <Link to="/about">About</Link>
        </div>
        <div className="product-link">
          <Link to="/questions/allquestions">Products</Link>
        </div>
        <div className="for-team-link">For Teams</div>
        <div className="search-box">
          <input placeholder="Search..." />
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i>
        </div>
        <Link to="/login" className="login-link">
          Log in
        </Link>
        <Link to="/signup" className="signup-link">
          Sign up
        </Link>
      </div>
      <ToolLeft style={toolStyle} />
    </div>
  );
}
