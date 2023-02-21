import "../css/profilepage.scss";
import ProfileSetting from "../liteComponents/ProfileSetting";
// import ProfileStatus from "../liteComponents/ProfileStatus";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-header-box">
        <img src="/image/profile_header.png" alt="" />
        <div className="profile-header-name">
          <p>ducanh</p>
          <div></div>
        </div>
        <div className="profile-edit-btn button">Edit profile</div>
      </div>
      <div className="profile-toolbar">
        <span className="pro-tool-active">Profile</span>
        <span>Settings</span>
      </div>
      <div className="profile-content-box">
        {/* <ProfileStatus /> */}
        <ProfileSetting />
      </div>
    </div>
  );
}
