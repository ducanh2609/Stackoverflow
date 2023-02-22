import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/userpage.scss";
import UsersItemsPage from "../liteComponents/UsersItemsPage";
import { allUserSlice } from "../reducers/userSlice";
import { getUser } from "../redux/selector";

export default function UserContent() {
  const dispatch = useDispatch();
  const allUser = useSelector(getUser).allUser;
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user`).then(async (res) => {
      let users = await res.json();
      dispatch(allUserSlice.actions.allUser(users));
    });
  }, [dispatch]);
  return (
    <div className="users-page">
      <div className="users-header-box">
        <p>Users</p>
      </div>
      <div className="users-search">
        <div className="users-input">
          <input type="text" name="users-search" placeholder="Filter by user" />
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i>
        </div>

        <div>
          <span>Repulation</span>
          <span>New users</span>
          <span>Voters</span>
          <span>Editors</span>
          <span>Moderators</span>
        </div>
      </div>
      <div className="users-time">
        <span>week</span>
        <span>month</span>
        <span>quarter</span>
        <span>year</span>
        <span>all</span>
      </div>
      <div className="users-content-box">
        <div className="users-content">
          {allUser.map((item, index) => (
            <UsersItemsPage key={index} user={item}></UsersItemsPage>
          ))}
        </div>
      </div>
      <div className="div-page">
        <button className="previos" id="previos">
          <i className="fa-sharp fa-solid fa-backward"></i>
        </button>
        <div className="page-id" id="pageId">
          <a href="/" className="order">
            <span>1</span>
          </a>
        </div>
        <button className="next" id="next">
          <i className="fa-sharp fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}
