export default function TagsItem(props) {
  return (
    <div className="tags-item">
      <span
        onClick={() => {
          window.location.href = `/questions/allquestions/${props.title}`;
        }}
      >
        {props.title}
      </span>{" "}
      x <span>{props.count}</span>
    </div>
  );
}
