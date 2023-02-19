import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/detailpage.scss";
import { questionSlice } from "../reducers/questionSlice";
import { allAnswerSlice, methodAnswerSlice } from "../reducers/answerSlice";
import {
  getAnswer,
  getMethod,
  getQuestion,
  getUser,
  getValue,
} from "../redux/selector";
import AnswerContent from "./AnswerContent";

export default function DetailPage() {
  const dispatch = useDispatch();
  const question = useSelector(getQuestion).question;
  const allAnswer = useSelector(getAnswer).allAnswer;
  const user = useSelector(getUser).user;
  const mehthodAnswer = useSelector(getMethod).methodAnswer;
  const valueUpdate = useSelector(getValue).value;
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  useEffect(() => {
    if (valueUpdate.content !== "") {
      setValue(valueUpdate.content);
    }
  }, [valueUpdate]);
  useLayoutEffect(() => {
    let ques_id = window.location.href.slice(47);
    fetch(`http://localhost:8000/api/v1/question/${ques_id}`).then(
      async (res) => {
        let question = await res.json();
        dispatch(questionSlice.actions.question(question));
        fetch(`http://localhost:8000/api/v1/question/${ques_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ view: question.view + 1 }),
        });
      }
    );
    fetch(`http://localhost:8000/api/v1/answer/${ques_id}`).then(
      async (res) => {
        let data = await res.json();
        dispatch(allAnswerSlice.actions.allAnswer(data));
      }
    );
  }, [dispatch]);
  function sendAnswer(e) {
    e.preventDefault();
    let ques_id = window.location.href.slice(47);
    if (e.target.answer.value.length < 20) {
      setErr("(*) Vui lòng điền câu trả lời của bạn ít nhất 20 kí tự");
    } else {
      setErr("");
      if (mehthodAnswer === "update") {
        let data = {
          ans_id: valueUpdate.ans_id,
          name: user.name,
          image: user.image,
          user_id: user.user_id,
          ques_id: ques_id,
          content: e.target.answer.value,
          vote: 0,
        };
        fetch(`http://localhost:8000/api/v1/answer/${valueUpdate.ans_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(async (res) => {
          let message = await res.json();
          if (message.message === "Update successfully") {
            dispatch(allAnswerSlice.actions.updateAnswer(data));
            dispatch(methodAnswerSlice.actions.method(""));
            setValue("");
          }
        });
      } else {
        let data = {
          name: user.name,
          image: user.image,
          user_id: user.user_id,
          ques_id: ques_id,
          content: e.target.answer.value,
          vote: 0,
        };
        fetch("http://localhost:8000/api/v1/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(async (res) => {
          let message = await res.json();
          if (message.message === "Post successfully") {
            data.ans_id = message.ans_id;
            dispatch(allAnswerSlice.actions.uploadAnswer(data));
            setValue("");
          }
        });
      }
    }
  }
  return (
    <div className="detail-page">
      <div className="detail-header">
        <div className="detail-header-title">
          <p>{question.title}</p>
          <a href="/questions/ask" className="button">
            Ask Question
          </a>
        </div>
        <div className="detail-header-properties">
          Asked <span>today</span> Modified <span>today</span> Viewed
          <span>{question.view + 1} times</span>
        </div>
      </div>
      <div className="detail-content">
        <div className="detail-content-left">
          <i className="fa-solid fa-caret-up fa-3x"></i>
          <p>{question.vote}</p>
          <i className="fa-solid fa-caret-down fa-3x"></i>
        </div>
        <div className="detail-content-right">
          <pre>
            <code>{question.code}</code>
          </pre>
          <p>{question.text}</p>
          <div>
            {question.cata_name
              ? question.cata_name.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              : ""}
          </div>
          <div className="question-user">
            <img src={question.image} alt="" />
            <p>{question.name}</p>
          </div>
        </div>
      </div>
      <div className="detail-answer">
        <p>
          <span>{allAnswer.length}</span> <span>Answer</span>
        </p>
        {allAnswer.length !== 0
          ? allAnswer.map((item, index) => (
              <AnswerContent
                key={index}
                data={item}
                userID={user.user_id}
                userAnswer={item.user_id}
              ></AnswerContent>
            ))
          : ""}
      </div>
      <form onSubmit={sendAnswer} className="answer-form">
        <p>Your Answer</p>
        <textarea
          name="answer"
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
        <button>Post Your Answer</button>
        <div>
          <i>{err}</i>
        </div>
      </form>
    </div>
  );
}
