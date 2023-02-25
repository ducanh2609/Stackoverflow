import { useSelector } from "react-redux";
import { getUser } from "../redux/selector";

export default function ProfileStatus(props) {
  const user = props.user;
  const loginUser = useSelector(getUser).user;

  return (
    <div className="profile-status da-10">
      <div className="profile-status-left da-10">
        <div className="status-box">
          <p>Stats</p>
          <div>
            <div>
              <p>1</p>
              <p>reputation</p>
            </div>
            <div>
              <p>0</p>
              <p>reached</p>
            </div>
            <div>
              <p>0</p>
              <p>answers</p>
            </div>
            <div>
              <p>0</p>
              <p>questions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-status-right da-10">
        <div className="profile-about">
          <p>About</p>
          <div className="about-box">
            {user.about === null || user.about === "" ? (
              loginUser.user_id === user.user_id ? (
                <p className="da-10">
                  Your about me section is currently blank. Would you like to
                  add one?<span onClick={props.onClick}> Edit profile</span>
                </p>
              ) : (
                <p>This one about section is currently blank.</p>
              )
            ) : (
              <p
                style={{ textAlign: "left", width: "100%", margin: "0px auto" }}
              >
                {user.about}
              </p>
            )}
          </div>
        </div>
        <div className="profile-about profile-infor">
          <p>User Information</p>
          <div className="infor-box about-box">
            <span>Display Name:</span> <span>{user.name}</span> <br />
            <span>Email:</span> <span>{user.email}</span> <br />
            <span>Address:</span> <span>{user.address}</span> <br />
          </div>
        </div>
      </div>
    </div>
  );
}
