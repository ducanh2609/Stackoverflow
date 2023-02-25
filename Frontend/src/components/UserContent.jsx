import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../css/userpage.scss";
import UsersItemsPage from "../liteComponents/UsersItemsPage";
import { allUserSlice } from "../reducers/userSlice";
import { getUser } from "../redux/selector";

export default function UserContent() {
  let params = useParams();
  const dispatch = useDispatch();
  const allUser = useSelector(getUser).allUser;
  const [userMap, setUserMap] = useState([]);
  const [divPage, setDivPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(params.title);
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/user`).then(async (res) => {
      let users = await res.json();
      dispatch(allUserSlice.actions.allUser(users));
      let number = [];
      let divLength = Math.ceil(users.length / 24);
      for (let i = 0; i < divLength; i++) {
        number.push({ number: i + 1 });
      }
      setDivPage(number);
    });
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(params.title);
    let userSearchArr = allUser.filter(
      (item) => item.name.indexOf(params.id) !== -1
    );
    params.id ? setUserMap(userSearchArr) : setUserMap(allUser);
  }, [allUser, params]);
  function findUser(e) {
    let user = allUser.filter((item) => item.name.includes(e.target.value));
    setUserMap(user);
  }
  let previos = "";
  if (+currentPage === 1) {
    previos = `/questions/users/${currentPage}`;
  } else {
    previos = `/questions/users/${currentPage - 1}`;
  }

  let next = "";
  if (+currentPage === divPage.length) {
    next = `/questions/users/${currentPage}`;
  } else {
    next = `/questions/users/${+currentPage + 1}`;
  }
  return (
    <div className="users-page">
      <div className="users-header-box">
        {params.id ? <p>Users [{params.id}]</p> : <p>Users</p>}
      </div>
      <div className="users-search">
        <div className="users-input">
          <input
            type="text"
            name="users-search"
            onInput={findUser}
            placeholder="Filter by user"
          />
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
          {userMap.map((item, index) => (
            <UsersItemsPage key={index} user={item}></UsersItemsPage>
          ))}
        </div>
      </div>
      <div className="div-page">
        <Link to={previos} className="previos" id="previos" disabled>
          <i className="fa-sharp fa-solid fa-backward"></i>
        </Link>
        <div className="page-id" id="pageId">
          {divPage.map((item, index) => (
            <div
              key={index}
              href="/"
              className={+params.title === index + 1 ? "order active" : "order"}
            >
              <span>{item.number}</span>
            </div>
          ))}
        </div>
        <Link to={next} className="next">
          <i className="fa-sharp fa-solid fa-forward"></i>
        </Link>
      </div>
    </div>
  );
}
