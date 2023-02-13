import { Link } from "react-router-dom";

export default function AboutHeader() {
  return (
    <div className="about-header">
      <div className="about-header-box">
        <div className="menu-btn">
          <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        <div className="logo">
          <Link to="/">
            <img src="../image/Overflow_logo.png" alt="" />
          </Link>
        </div>
        <div className="about-header-tool">
          <div className="our-products-box">
            <span>Our products</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="our-companys-box">
            <span>Our companys</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="careers-box">Careers</div>
          <div className="open-positions-box">Open positions</div>
          <div className="follow-us-box">
            <span>Follow us</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="contact-box">Contact</div>
        </div>
      </div>
    </div>
  );
}
