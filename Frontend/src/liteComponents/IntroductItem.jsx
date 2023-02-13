export default function IntroItem(props) {
  return (
    <div className="intro-item">
      {props.element}
      <span>{props.content}</span>
    </div>
  );
}
