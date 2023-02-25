export default function Content9Item(props) {
  return (
    <div className="content9-item da-10">
      {props.i}
      <p>{props.p}</p>
      <button>{props.button}</button>
    </div>
  );
}
