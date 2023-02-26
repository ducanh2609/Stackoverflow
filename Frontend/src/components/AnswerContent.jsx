import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  allAnswerSlice,
  methodAnswerSlice,
  valueSlice,
} from "../reducers/answerSlice";

export default function AnswerContent(props) {
  let sessIndex = document.cookie.indexOf("sessionID=");
  const [voteAns, setVoteAns] = useState(props.data.vote);
  useEffect(() => {
    setVoteAns(props.data.vote);
  }, [props.data]);
  const dispatch = useDispatch();
  function editAns(e) {
    let update = {
      content: props.data.content,
      ans_id: props.data.ans_id,
      sessionID: document.cookie.slice(sessIndex + 10),
    };
    dispatch(valueSlice.actions.value(update));
    dispatch(methodAnswerSlice.actions.method("update"));
  }
  function delAns() {
    dispatch(allAnswerSlice.actions.delAnswer(props.data.ans_id));
    fetch(`http://localhost:8000/api/v1/answer/${props.data.ans_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionID: document.cookie.slice(sessIndex + 10),
      }),
    });
  }
  function insVote() {
    fetch(`http://localhost:8000/api/v1/answer/vote/${props.data.ans_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vote: voteAns + 1,
        sessionID: document.cookie.slice(sessIndex + 10),
      }),
    }).then(() => {
      setVoteAns(voteAns + 1);
    });
  }
  function desVote() {
    fetch(`http://localhost:8000/api/v1/answer/vote/${props.data.ans_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vote: voteAns - 1,
        sessionID: document.cookie.slice(sessIndex + 10),
      }),
    }).then(() => {
      setVoteAns(voteAns - 1);
    });
  }
  return (
    <div>
      <div className="answer-content-box">
        <div className="answer-content">
          <div className="answer-content-left">
            <i onClick={insVote} className="fa-solid fa-caret-up fa-3x"></i>
            <p>{voteAns}</p>
            <i onClick={desVote} className="fa-solid fa-caret-down fa-3x"></i>
          </div>
          <div className="answer-content-right">{props.data.content}</div>
        </div>
        {props.userID === props.userAnswer ? (
          <>
            <i
              onClick={editAns}
              style={{ color: "blue" }}
              className="fa-solid fa-pen-to-square fa-2x"
            ></i>
            <i
              onClick={delAns}
              style={{ color: "red" }}
              className="fa-solid fa-trash-can fa-2x"
            ></i>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="answer-user">
        <img src={props.data.image} alt="" />
        <p> {props.data.name}</p>
      </div>
    </div>
  );
}
