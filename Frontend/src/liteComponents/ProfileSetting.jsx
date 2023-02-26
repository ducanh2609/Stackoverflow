import { useRef, useState } from "react";
import Toast from "../subComponentsHp/Toast";

export default function ProfileSetting(props) {
  const user = props.user;

  const [src, setSrc] = useState(user.image);
  const [username, setUsername] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [about, setAbout] = useState(user.about);
  let menuStyle = {
    backgroundColor: "rgb(244 130 37)",
    color: "white",
  };
  const [menuStyleProfile, setMenuStyleProfile] = useState(menuStyle);
  const [menuStyleChangeP, setMenuStyleChangeP] = useState({});
  const [currentTool, setCurrentTool] = useState("profile");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [toastList, setToastList] = useState({});

  let imageInput = useRef();
  let srcInput = useRef();
  const focusInput = () => {
    imageInput.current.click();
  };
  function getFile(e) {
    let link = URL.createObjectURL(e.target.files[0]);
    setSrc(link);
  }
  function changeMenuPro() {
    setMenuStyleProfile(menuStyle);
    setMenuStyleChangeP({});
    setCurrentTool("profile");
  }
  function changeMenuChangeP() {
    setMenuStyleChangeP(menuStyle);
    setMenuStyleProfile({});
    setCurrentTool("change password");
  }
  function changePass(e) {
    e.preventDefault();
    if (password !== user.password) setErr("Mật khẩu không đúng");
    else if (newPass.length < 6)
      setErr("Mật khẩu phải lơn hơn hoặc bằng 6 kí tự");
    else if (newPass !== confirmPass) setErr("Mật khẩu nhập lại không đúng");
    else {
      setErr("");
      let sessIndex = document.cookie.indexOf("sessionID=");
      let data = {
        password: newPass,
        sessionID: document.cookie.slice(sessIndex + 10),
      };
      fetch(`http://localhost:8000/api/v1/user/changepass/${user.user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        let message = await res.json();
        setToastList({
          status: "Success",
          message: message.message,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
    }
  }
  let link = `http://localhost:8000/api/v1/profile/${user.user_id}`;
  return (
    <>
      <Toast toastArray={toastList}></Toast>
      <div className="profile-setting-box da-10">
        <div className="setting-left da-10">
          <div onClick={changeMenuPro} style={menuStyleProfile}>
            Edit Profile
          </div>
          <div onClick={changeMenuChangeP} style={menuStyleChangeP}>
            Change Password
          </div>
        </div>
        <div className="setting-right da-10">
          {currentTool === "profile" ? (
            <>
              <p>Edit your profile</p>
              <form
                action={link}
                encType="multipart/form-data"
                method="post"
                className="edit-form"
              >
                <div className="image-box">
                  <img className="da-10" name="src" src={src} ref={srcInput} alt="" />
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
                <input
                  name="displayname"
                  value={username}
                  className="da-10"
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
                  className="da-10"
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
                  <div onClick={props.onClick} className="button">
                    Cancel
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <p>Change Password</p>
              <form onSubmit={changePass} className="edit-form">
                <div className="error">
                  <i>{err}</i>
                </div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className="da-10"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                />{" "}
                <br />
                <label htmlFor="newPass">New Password</label>
                <br />{" "}
                <input
                  className="da-10"
                  name="newPass"
                  value={newPass}
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                  type="password"
                />
                <br />
                <label htmlFor="confirmPass">Confirm Password</label>
                <br />{" "}
                <input
                  className="da-10"
                  name="confirmPass"
                  value={confirmPass}
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                  type="password"
                />{" "}
                <br />
                <div className="save-btn">
                  <button>Send</button>
                  <div onClick={props.onClick} className="button">
                    Cancel
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
