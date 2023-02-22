import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/profilepage.scss";
import ProfileSetting from "../liteComponents/ProfileSetting";
import ProfileStatus from "../liteComponents/ProfileStatus";
import { getUser } from "../redux/selector";

export default function ProfilePage() {
  let menuStyle = {
    backgroundColor: "rgb(244 130 37)",
    color: "white",
  };
  const [menu, setMenu] = useState("profile");
  const [menuStyleProfile, setMenuStyleProfile] = useState(menuStyle);
  const [menuStyleSettings, setMenuStyleSettings] = useState({});
  const user = useSelector(getUser).user;

  function changeMenu() {
    setMenu("settings");
    setMenuStyleSettings(menuStyle);
    setMenuStyleProfile({});
  }
  function changeMenuProfile() {
    setMenu("profile");
    setMenuStyleSettings({});
    setMenuStyleProfile(menuStyle);
  }
  return (
    <div className="profile-page">
      <div className="profile-header-box">
        <img src={user.image} alt="" />
        <div className="profile-header-name">
          <p>{user.name}</p>
          <div></div>
        </div>
        <div onClick={changeMenu} className="profile-edit-btn button">
          Edit profile
        </div>
      </div>
      <div className="profile-toolbar">
        <span onClick={changeMenuProfile} style={menuStyleProfile}>
          Profile
        </span>
        <span onClick={changeMenu} style={menuStyleSettings}>
          Settings
        </span>
      </div>
      <div className="profile-content-box">
        {menu === "profile" ? (
          <ProfileStatus onClick={changeMenu} />
        ) : menu === "settings" ? (
          <ProfileSetting />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
