export default function ContentItem(props) {
  function toDetail(e) {
    window.location.href = `/questions/detail/question${props.data.ques_id}`;
  }
  return (
    <div className="content-item">
      <div className="content-item-left">
        <p>
          <span>{props.data.vote}</span> votes
        </p>
        <p>
          <span>0</span> answers
        </p>
        <p>
          <span>{props.data.view}</span> views
        </p>
      </div>
      <div className="content-item-right">
        <div onClick={toDetail} className="question-title">
          {props.data.title}
        </div>
        <div className="question-text">{props.data.text}</div>
        <div className="question-tags">
          <div>
            {props.data.cata_name.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
