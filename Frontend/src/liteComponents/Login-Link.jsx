export default function LoginLink(props) {
  let clas = `loginG ${props.class}`;
  return (
    <div style={props.style} className={clas}>
      {props.src}
      <span>{props.content}</span>
    </div>
  );
}
