export default function Content7Item(props) {
  return (
    <div className="content7-item">
      {props.i1}
      {props.i2}
      <p style={{ fontWeight: "700" }}>{props.p1}</p>
      <p style={{ fontSize: "16px" }}>{props.p2}</p>
    </div>
  );
}
