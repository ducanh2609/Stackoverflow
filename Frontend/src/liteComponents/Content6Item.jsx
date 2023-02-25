export default function Content6Item(props) {
  return (
    <div className="content6-item">
      <div style={{ display: "flex", margin: "5px 0" }}>
        <img src="/image/StackOF.png" alt="" />
        <h3>{props.h3}</h3>
      </div>
      <p className="da-10">{props.p}</p>
      <button>Learn more</button>
      <img className="da-0" src={props.src} alt="" />
    </div>
  );
}
