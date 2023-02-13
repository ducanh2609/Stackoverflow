import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-box">
        <div className="menu-btn">
          <i className="fa-solid fa-bars fa-lg"></i>
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
          <Link to="/questions">Products</Link>
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
    </div>
  );
}
