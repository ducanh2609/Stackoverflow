import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../redux/selector";
import { allUserSlice, userSlice } from "../reducers/userSlice";
import ToolLeft from "../liteComponents/ToolLeft";
import Toast from "../subComponentsHp/Toast";

export default function OkUserHeader() {
  const dispatch = useDispatch();
  const user = useSelector(getUser).user;
  const [menuStyle, setMenuStyle] = useState({ display: "none" });
  const [demoStyle, setDemoStyle] = useState({ display: "none" });
  const [toastList, setToastList] = useState({});

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
      setMenuStyle({ display: "none" });
      setToastList({
        status: "Success",
        message: "Đăng xuất thành công",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    });
  }
  useEffect(() => {
    let userIndex = document.cookie.indexOf(";");
    let userID = document.cookie.slice(7, userIndex);
    fetch(`http://localhost:8000/api/v1/user`).then(async (res) => {
      let allUser = await res.json();
      dispatch(allUserSlice.actions.allUser(allUser));
      let user = allUser.find((item) => item.user_id === +userID);
      dispatch(userSlice.actions.user(user));
    });
  }, [dispatch]);
  const [toolI, setToolI] = useState(
    <i className="fa-solid fa-bars fa-lg"></i>
  );
  const [toolStyle, setToolStyle] = useState({ display: "none" });

  function menuToggle() {
    if (toolStyle.display === "none") {
      setToolStyle({ display: "block" });
      setToolI(<i className="fa-solid fa-xmark fa-lg"></i>);
    } else {
      setToolStyle({ display: "none" });
      setToolI(<i className="fa-solid fa-bars fa-lg"></i>);
    }
  }
  function sendSearch(e) {
    e.preventDefault();
    let value = e.target.searchValue.value;
    if (value.includes("user:"))
      window.location.href = `/questions/users/${value.slice(6)}`;
    else if (value.includes("tag:"))
      window.location.href = `/questions/allquestions/${value.slice(5)}`;
    else if (value.includes("question:"))
      window.location.href = `/questions/allquestions/${value.slice(10)}`;
  }
  let userLink = `/questions/profile/${user.user_id}`;
  return (
    <>
      <Toast toastArray={toastList}></Toast>
      <div className="header">
        <div className="header-box da-10">
          <div
            onClick={menuToggle}
            className="menu-btn da-1 da-sm-0 da-md-0 da-lg-0 da-xl-0"
          >
            {toolI}
          </div>
          <div className="logo da-15">
            <Link className="da-10 da-sm-0 da-md-0 da-lg-0 da-xl-0" to="/">
              <img src="/image/StackOF.png" alt="" />
            </Link>
            <Link className="da-0" to="/">
              <img src="/image/Overflow_logo.png" alt="" />
            </Link>
          </div>
          <div className="product-link da-15">
            <Link to="/questions/home">Products</Link>
          </div>
          <form onSubmit={sendSearch} className="ok-search-box da-0">
            <input
              name="searchValue"
              onFocus={() => {
                setDemoStyle({ display: "block" });
              }}
              onBlur={() => {
                setDemoStyle({ display: "none" });
              }}
              placeholder="Search..."
            />
            <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i>
            <div className="search-detail-box" style={demoStyle}>
              <div className="search-detail-demo">
                <p>
                  <span>user:</span> 123
                </p>
                <p>
                  <span>tag:</span> java
                </p>
                <p>
                  <span>question:</span> How are you?
                </p>
              </div>
            </div>
          </form>
          <div className="profile-header da-7">
            <div className="profile-header-image da-2">
              <Link to={userLink}>
                <img src={user.image} alt="" />
              </Link>
              <p className="da-0">1</p>
              <div className="dot da-0"></div>
              <p className="da-0">1</p>
            </div>

            <div className="profile-header-item da-2">
              <i className="fa-solid fa-inbox fa-lg"></i>
            </div>
            <div className="profile-header-item da-2">
              <i className="fa-solid fa-trophy fa-lg"></i>
            </div>
            <div className="profile-header-item da-2">
              <i className="fa-solid fa-circle-question fa-lg"></i>
            </div>
            <div onClick={menuBoxOpen} className="profile-header-item da-2">
              <i className="fa-brands fa-stack-exchange fa-lg"></i>
            </div>
          </div>
          <div className="profile-menu-box" style={menuStyle}>
            <div
              className="box1"
              style={{ backgroundColor: "rgb(241 242 243)" }}
            >
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
            <div
              className="box2"
              style={{ backgroundColor: "rgb(241 242 243)" }}
            >
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
        <ToolLeft style={toolStyle} />
      </div>
    </>
  );
}
