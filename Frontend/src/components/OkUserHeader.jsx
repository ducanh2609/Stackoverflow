import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../redux/selector";
import { userSlice } from "../reducers/userSlice";

export default function OkUserHeader() {
  const dispatch = useDispatch();
  const user = useSelector(getUser).user;
  const [menuStyle, setMenuStyle] = useState({ display: "none" });
  function menuBoxOpen() {
    if (menuStyle.display === "none") {
      setMenuStyle({ display: "block" });
    } else {
      setMenuStyle({ display: "none" });
    }
  }
  function logOut() {
    let sessIndex = document.cookie.indexOf("sessionID=");
    let sessionID = document.cookie.slice(sessIndex + 10);
    fetch(`http://localhost:8000/logout/${sessionID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      window.location.href = "/";
    });
  }
  useEffect(() => {
    let userIndex = document.cookie.indexOf(";");
    let userID = document.cookie.slice(7, userIndex);
    fetch(`http://localhost:8000/api/v1/user/${userID}`).then(async (res) => {
      let user = await res.json();
      dispatch(userSlice.actions.user(user));
    });
  }, [dispatch]);
  return (
    <div className="header">
      <div className="header-box">
        <div className="logo">
          <Link to="/">
            <img src="/image/Overflow_logo.png" alt="" />
          </Link>
        </div>
        <div className="product-link">
          <Link to="/questions/home">Products</Link>
        </div>
        <div className="ok-search-box">
          <input placeholder="Search..." />
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i>
        </div>
        <div className="profile-header">
          <div className="profile-header-image">
            <img src={user.image} alt="" />
            <p>1</p>
            <div className="dot"></div>
            <p>1</p>
          </div>

          <div className="profile-header-item">
            <i className="fa-solid fa-inbox fa-lg"></i>
          </div>
          <div className="profile-header-item">
            <i className="fa-solid fa-trophy fa-lg"></i>
          </div>
          <div className="profile-header-item">
            <i className="fa-solid fa-circle-question fa-lg"></i>
          </div>
          <div onClick={menuBoxOpen} className="profile-header-item">
            <i className="fa-brands fa-stack-exchange fa-lg"></i>
          </div>
        </div>
        <div className="profile-menu-box" style={menuStyle}>
          <div className="box1" style={{ backgroundColor: "rgb(241 242 243)" }}>
            CURRENT COMMUNITY
          </div>
          <div className="box2 box3">
            <div className="box2">
              <img src="/image/StackOF.png" alt="" />
              <p style={{ fontWeight: "600" }}>Stack Overflow</p>
            </div>
            <div className="box2">
              <p>help</p>
              <p>chat</p>
              <p onClick={logOut}>log out</p>
            </div>
          </div>
          <div className="box2 box3">
            <div style={{ display: "flex" }}>
              <span></span>
              <i className="fa-brands fa-stack-overflow fa-lg"></i>
              <p>Meta Stack Overflow</p>
            </div>
          </div>
          <div className="box2" style={{ backgroundColor: "rgb(241 242 243)" }}>
            <p className="box1">YOUR COMMUNITIES</p>
            <p>edit</p>
          </div>
          <div className="box2 box3">
            <div className="box2">
              <img src="/image/StackOF.png" alt="" />
              <p>Stack Overflow</p>
            </div>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
