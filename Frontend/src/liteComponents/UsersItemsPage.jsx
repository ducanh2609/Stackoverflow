export default function UsersItemsPage(props) {
  let link = `/questions/profile/${props.user.user_id}`;
  return (
    <div
      onClick={() => {
        window.location.href = link;
      }}
      className="users-items"
    >
      <img src={props.user.image} alt="" />
      <div className="users-infor">
        <div className="user-name">{props.user.name}</div>
        <div className="user-address">{props.user.address}</div>
      </div>
    </div>
  );
}
