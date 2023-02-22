export default function ProfileStatus(props) {
  return (
    <div className="profile-status">
      <div className="profile-status-left">
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
      <div className="profile-status-right">
        <div className="profile-about">
          <p>About</p>
          <div className="about-box">
            <p>
              Your about me section is currently blank. Would you like to add
              one?<span onClick={props.onClick}> Edit profile</span>
            </p>
          </div>
        </div>
        <div className="profile-about profile-infor">
          <p>User Information</p>
          <div className="infor-box about-box">
            <span>Display Name:</span> <span>Duc Anh</span> <br />
            <span>Email:</span> <span>Duc Anh</span> <br />
            <span>Address:</span> <span>Duc Anh</span> <br />
          </div>
        </div>
      </div>
    </div>
  );
}
