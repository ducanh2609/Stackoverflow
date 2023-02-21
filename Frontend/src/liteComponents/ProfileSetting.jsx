export default function ProfileSetting() {
  return (
    <div className="profile-setting-box">
      <div className="setting-left">
        <div className="pro-tool-active">Edit Profile</div>
      </div>
      <div className="setting-right">
        <p>Edit your profile</p>
        <form className="edit-form">
          <img src="" alt="" />
          <label htmlFor="displayname">Display Name</label>
          <br />
          <input name="displayname" type="text" /> <br />
          <label htmlFor="">Address</label>
          <br /> <input name="address" type="text" />
          <br />
          <label htmlFor="about">About me</label> <br />
          <textarea name="about"></textarea>
          <div className="save-btn">
            <button>Save profile</button>
            <div className="button">Cancel</div>
          </div>
        </form>
      </div>
    </div>
  );
}
