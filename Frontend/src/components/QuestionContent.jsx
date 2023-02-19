import { Link } from "react-router-dom";
import ContentItem from "../liteComponents/ContentItem";
import { getQuestion } from "../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { allQuestionSlice } from "../reducers/questionSlice";
import { useEffect } from "react";

export default function QuestionContent(props) {
  const dispatch = useDispatch();
  const allQuestion = useSelector(getQuestion).allQuestion;
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/question").then(async (res) => {
      let data = await res.json();
      dispatch(allQuestionSlice.actions.allQuestion(data));
    });
  }, [dispatch]);
  return (
    <div className="question-content">
      <div className="content-header">
        <div className="content-header-top">
          <p>{props.title}</p>
          <button>
            <Link to="/questions/ask" style={{ color: "white" }}>
              Ask Question
            </Link>
          </button>
        </div>
        <div className="content-header-bottom">
          <p>{allQuestion.length} questions</p>
          <div className="content-navbar">
            <div className="nav-item">Newest</div>
            <div className="nav-item">Active</div>
            <div className="nav-item">
              Bountied <span>255</span>
            </div>
            <div
              className="nav-item"
              style={{ backgroundColor: "rgb(227 230 232)" }}
            >
              Unanswered
            </div>
            <div className="nav-item" style={{ display: "flex" }}>
              More <i className="fa-solid fa-sort-down"></i>
            </div>
          </div>
          <div className="filte-btn">
            <i className="fa-solid fa-arrow-up-wide-short fa-lg"></i>
            Filter
          </div>
        </div>
      </div>
      <div className="content-body">
        {allQuestion.map((item, index) => (
          <ContentItem key={index} data={item}></ContentItem>
        ))}
      </div>
    </div>
  );
}
