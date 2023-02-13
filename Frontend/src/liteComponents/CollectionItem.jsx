export default function CollectionItem(props) {
  return (
    <div className="collectives-item">
      <div>
        <img src={props.src} alt="" />
        <div className="collect-name">
          <p style={{ fontSize: "16px" }}>{props.name}</p>
          <p>{props.member}</p>
        </div>
        <div className="join-btn">
          <button>Join</button>
        </div>
      </div>
      <p>{props.content}</p>
    </div>
  );
}
