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
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export default function DetailPage() {
  const dispatch = useDispatch();
  const question = useSelector(getQuestion).question;
  const allAnswer = useSelector(getAnswer).allAnswer;
  const user = useSelector(getUser).user;
  const mehthodAnswer = useSelector(getMethod).methodAnswer;
  const valueUpdate = useSelector(getValue).value;
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const [voteQues, setVoteQues] = useState(question.vote);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    if (valueUpdate.content !== "") {
      setValue(valueUpdate.content);
    }
    setVoteQues(question.vote);
  }, [valueUpdate, question]);
  useEffect(() => {
    let userIndex = document.cookie.indexOf(";");
    let sessIndex = document.cookie.indexOf("sessionID=");
    let data = {
      sessionID: document.cookie.slice(sessIndex + 10),
      userID: document.cookie.slice(7, userIndex),
    };
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      let message = await res.json();
      if (message.message === "Not Session") {
        setFlag(0);
      } else {
        setFlag(1);
      }
    });
  }, []);
  useLayoutEffect(() => {
    let ques_id = window.location.href.slice(47);
    let sessIndex = document.cookie.indexOf("sessionID=");

    fetch(`http://localhost:8000/api/v1/question/${ques_id}`).then(
      async (res) => {
        let question = await res.json();
        dispatch(questionSlice.actions.question(question));
        fetch(`http://localhost:8000/api/v1/question/${ques_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            view: question.view + 1,
            sessionID: document.cookie.slice(sessIndex + 10),
          }),
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
  let sessIndex = document.cookie.indexOf("sessionID=");

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
          sessionID: document.cookie.slice(sessIndex + 10),
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
          sessionID: document.cookie.slice(sessIndex + 10),
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

  function insVote() {
    fetch(`http://localhost:8000/api/v1/question/vote/${question.ques_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vote: voteQues + 1,
        sessionID: document.cookie.slice(sessIndex + 10),
      }),
    }).then(() => {
      setVoteQues(voteQues + 1);
    });
  }
  function desVote() {
    fetch(`http://localhost:8000/api/v1/question/vote/${question.ques_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vote: voteQues - 1,
        sessionID: document.cookie.slice(sessIndex + 10),
      }),
    }).then(() => {
      setVoteQues(voteQues - 1);
    });
  }
  return (
    <div className="detail-page da-10">
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
          <i onClick={insVote} className="fa-solid fa-caret-up fa-3x"></i>
          <p>{voteQues}</p>
          <i onClick={desVote} className="fa-solid fa-caret-down fa-3x"></i>
        </div>
        <div className="detail-content-right">
          {question.code ? (
            <pre>
              <code
                className="language-javascript"
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight(question.code, {
                    language: "javascript",
                  }).value,
                }}
              ></code>
            </pre>
          ) : (
            ""
          )}
          <p>{question.text}</p>
          <div>
            {question.cata_name
              ? question.cata_name.map((item, index) => (
                  <span
                    onClick={() => {
                      window.location.href = `/questions/allquestions/${item}`;
                    }}
                    key={index}
                  >
                    {item}
                  </span>
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
      {flag === 0 ? (
        ""
      ) : (
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
      )}
    </div>
  );
}
