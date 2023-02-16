import { useLayoutEffect, useState } from "react";
import "../css/detailpage.scss";

export default function DetailPage() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState([]);

  useLayoutEffect(() => {
    let ques_id = window.location.href.slice(47);
    fetch(`http://localhost:8000/api/v1/question/${ques_id}`).then(
      async (res) => {
        let question = await res.json();
        console.log(question);
        setTitle(question.title);
        setCode(question.code);
        setText(question.text);
        setTag(question.cata_name);
      }
    );
  }, []);
  return (
    <div className="detail-page">
      <div className="detail-header">
        <div className="detail-header-title">
          <p>{title}</p>
          <a href="/questions/ask" className="button">
            Ask Question
          </a>
        </div>
        <div className="detail-header-properties">
          Asked <span>today</span> Modified <span>today</span> Viewed
          <span>2 times</span>
        </div>
      </div>
      <div className="detail-content">
        <div className="detail-content-left">
          <i className="fa-solid fa-caret-up fa-3x"></i>
          <p>1</p>
          <i className="fa-solid fa-caret-down fa-3x"></i>
        </div>
        <div className="detail-content-right">
          <pre>
            <code>{code}</code>
          </pre>
          <p>{text}</p>
          <div>
            {tag.map((item) => (
              <span>{item}</span>
            ))}
          </div>
          <div className="question-user">Duc Anh</div>
        </div>
      </div>
      <div className="detail-answer">
        <p>
          <span>1</span> <span>Answer</span>
        </p>
        <div className="answer-content">
          <div className="answer-content-left">
            <i className="fa-solid fa-caret-up fa-3x"></i>
            <p>1</p>
            <i className="fa-solid fa-caret-down fa-3x"></i>
          </div>
          <div className="answer-content-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad,
            temporibus nostrum similique excepturi quod molestias. Eos veritatis
            maxime reiciendis optio pariatur iste iusto, magnam, nihil esse
            atque harum aliquid?
          </div>
        </div>
        <div className="answer-user">Duc Anh</div>
      </div>
      <form className="answer-form">
        <p>Your Answer</p>
        <textarea name="answer" type="text"></textarea>
        <div className="button">Post Your Answer</div>
      </form>
    </div>
  );
}
