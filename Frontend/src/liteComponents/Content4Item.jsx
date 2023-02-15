export default function Content4Item(props) {
  return (
    <div className="content4-item">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div style={{ fontWeight: "700" }}>
        <p>{props.p1}</p>
      </div>
      <div style={{ color: " rgb(129, 130, 131)" }}>
        <p>{props.p2}</p>
      </div>
      <div style={{ color: " rgb(129, 130, 131)" }}>
        <p className="year">{props.p3}</p>
      </div>
    </div>
  );
}
