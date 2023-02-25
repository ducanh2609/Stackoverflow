import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/profilepage.scss";
import ProfileSetting from "../liteComponents/ProfileSetting";
import ProfileStatus from "../liteComponents/ProfileStatus";
import { getUser } from "../redux/selector";

export default function ProfilePage() {
  let params = useParams();
  let menuStyle = {
    backgroundColor: "rgb(244 130 37)",
    color: "white",
  };
  const [menu, setMenu] = useState("profile");
  const [menuStyleProfile, setMenuStyleProfile] = useState(menuStyle);
  const [menuStyleSettings, setMenuStyleSettings] = useState({});
  const loginUser = useSelector(getUser).user;
  let user = {};
  const allUser = useSelector(getUser).allUser;
  if (allUser.length !== 0)
    user = allUser.find((item) => item.user_id === +params.title);

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
    <div className="profile-page da-10">
      <div className="profile-header-box">
        <img src={user.image} alt="" />
        <div className="profile-header-name">
          <p>{user.name}</p>
          <div></div>
        </div>
        {user.user_id === loginUser.user_id ? (
          <div onClick={changeMenu} className="profile-edit-btn button">
            Edit profile
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="profile-toolbar">
        <span onClick={changeMenuProfile} style={menuStyleProfile}>
          Profile
        </span>
        {user.user_id === loginUser.user_id ? (
          <span onClick={changeMenu} style={menuStyleSettings}>
            Settings
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="profile-content-box">
        {menu === "profile" ? (
          <ProfileStatus user={user} onClick={changeMenu} />
        ) : menu === "settings" ? (
          <ProfileSetting user={user} onClick={changeMenuProfile} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
