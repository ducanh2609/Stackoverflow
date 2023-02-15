export default function Content9Item(props) {
  return (
    <div className="content9-item">
      {props.i}
      <p>{props.p}</p>
      <button>{props.button}</button>
    </div>
  );
}
