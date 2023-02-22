export default function UsersItemsPage(props) {
  return (
    <div className="users-items">
      <img src={props.user.image} alt="" />
      <div className="users-infor">
        <div className="user-name">{props.user.name}</div>
        <div className="user-address">{props.user.address}</div>
      </div>
    </div>
  );
}
