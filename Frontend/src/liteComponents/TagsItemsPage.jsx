export default function TagsItemsPage(props) {
  return (
    <div className="tags-items">
      <div className="tags-name">{props.data.cata_name}</div>
      <div className="tags-question">
        <span>{props.data.question}</span> questions
      </div>
    </div>
  );
}
