import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../redux/selector";

export default function ProfileSetting() {
  const user = useSelector(getUser).user;
  const [src, setSrc] = useState(user.image);
  let imageInput = useRef();
  let srcInput = useRef();
  const focusInput = () => {
    imageInput.current.click();
  };
  function getFile(e) {
    let link = URL.createObjectURL(e.target.files[0]);
    setSrc(link);
  }
  function sendProfile(e) {
    e.preventDefault();

    let data = {
      name: e.target.displayname.value,
      address: e.target.address.value,
      about: e.target.about.value,
      image: src,
    };
    console.log(data);
    fetch(`http://localhost:8000/api/v1/profile/${user.user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        let message = await res.json();
        if (message.message === "Update successfully") {
          window.location.reload();
        }
      })
      .catch(() => {
        alert("Không update được dữ liệu");
      });
  }

  return (
    <div className="profile-setting-box">
      <div className="setting-left">
        <div className="pro-tool-active">Edit Profile</div>
      </div>
      <div className="setting-right">
        <p>Edit your profile</p>
        <form
          onSubmit={sendProfile}
          action="http://localhost:8000/api/v1/profile"
          encType="multipart/form-data"
          method="post"
          className="edit-form"
        >
          <div className="image-box">
            <img name="src" src={src} ref={srcInput} alt="" />
            <input
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
