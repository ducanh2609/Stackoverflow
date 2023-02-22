import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../redux/selector";

export default function ProfileSetting() {
  const user = useSelector(getUser).user;
  const [src, setSrc] = useState(user.image);
  const [username, setUsername] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [about, setAbout] = useState(user.about);

  let imageInput = useRef();
  let srcInput = useRef();
  const focusInput = () => {
    imageInput.current.click();
  };
  function getFile(e) {
    let link = URL.createObjectURL(e.target.files[0]);
    setSrc(link);
  }
  let link = `http://localhost:8000/api/v1/profile/${user.user_id}`;
  return (
    <div className="profile-setting-box">
      <div className="setting-left">
        <div className="pro-tool-active">Edit Profile</div>
      </div>
      <div className="setting-right">
        <p>Edit your profile</p>
        <form
          action={link}
          enctype="multipart/form-data"
          method="post"
          className="edit-form"
        >
          <div className="image-box">
            <img name="src" src={src} ref={srcInput} alt="" />
            <input
              onSubmit="return false"
              type="file"
              name="image"
              onChange={getFile}
              accept="image/*"
              ref={imageInput}
            />
            <div className="button" onClick={focusInput}>
              Choose Image
            </div>
          </div>
          <label htmlFor="displayname">Display Name</label>
          <br />
          <input
            name="displayname"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          />{" "}
          <br />
          <label htmlFor="">Address</label>
          <br />{" "}
          <input
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
          />
          <br />
          <label htmlFor="about">About me</label> <br />
          <textarea
            name="about"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          ></textarea>
          <div className="save-btn">
            <button>Save profile</button>
            <div className="button">Cancel</div>
          </div>
        </form>
      </div>
    </div>
  );
}
