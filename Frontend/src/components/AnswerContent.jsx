import { useDispatch } from "react-redux";
import {
  allAnswerSlice,
  methodAnswerSlice,
  valueSlice,
} from "../reducers/answerSlice";

export default function AnswerContent(props) {
  console.log(props.userID, "111", props.userAnswer);
  const dispatch = useDispatch();
  function editAns(e) {
    console.log(props.data.content);
    console.log(props.data.ans_id);
    let update = {
      content: props.data.content,
      ans_id: props.data.ans_id,
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
    });
  }
  return (
    <div>
      <div className="answer-content-box">
        <div className="answer-content">
          <div className="answer-content-left">
            <i className="fa-solid fa-caret-up fa-3x"></i>
            <p>{props.data.vote}</p>
            <i className="fa-solid fa-caret-down fa-3x"></i>
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
