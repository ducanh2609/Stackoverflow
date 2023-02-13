export default function TagsItem(props) {
  return (
    <div className="tags-item">
      <span>{props.title}</span> x <span>{props.count}</span>
    </div>
  );
}
