
export default function TagsItemsPage(props) {
  function sendTag() {
    window.location.href = `/questions/allquestions/${props.data.cata_name}`;
  }
  return (
    <div onClick={sendTag} className="tags-items">
      <div className="tags-name">{props.data.cata_name}</div>
      <div className="tags-question">
        <span>{props.data.question}</span> questions
      </div>
    </div>
  );
}
