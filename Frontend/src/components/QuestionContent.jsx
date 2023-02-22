import { Link } from "react-router-dom";
import ContentItem from "../liteComponents/ContentItem";
import { useDispatch, useSelector } from "react-redux";
import { allQuestionSlice } from "../reducers/questionSlice";
import { useEffect, useState } from "react";
import "../css/filterbox.scss";
import { getQuestion } from "../redux/selector";

export default function QuestionContent(props) {
  const [style, setStyle] = useState({ display: "none" });
  const dispatch = useDispatch();
  const allQuesStore = useSelector(getQuestion).allQuestion;
  let [allQuestion, setAllQuestion] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/question").then(async (res) => {
      let data = await res.json();
      dispatch(allQuestionSlice.actions.allQuestion(data));
    });
  }, [dispatch]);
  useEffect(() => {
    setAllQuestion(allQuesStore);
  }, [allQuesStore]);
  function sortForm(value, ques, str) {
    value.sort((a, b) => b - a);
    let sortQues = value.reduce((arr, item) => {
      for (let i = 0; i < ques.length; i++) {
        if (ques[i][str] === item) {
          arr.push(ques[i]);
          ques = ques.filter((k, index) => index !== i);
        }
      }
      return arr;
    }, []);
    setAllQuestion(sortQues);
  }
  function liteForm(sort, arr) {
    if (sort === "votes") {
      let sortVote = arr.map((item) => item.vote);
      sortForm(sortVote, arr, "vote");
    } else if (sort === "answers") {
      let sortAnswer = arr.map((item) => item.answers);
      sortForm(sortAnswer, arr, "answers");
    } else if (sort === "views") {
      let sortView = arr.map((item) => item.view);
      sortForm(sortView, arr, "view");
    }
  }
  function filterQuestion(e) {
    e.preventDefault();
    setStyle({ display: "none" });
    let check;
    for (let i = 0; i < e.target.sort.length; i++) {
      if (e.target.sort[i].checked === true) {
        check = e.target.sort[i].value;
      }
    }
    let data = {
      noAnswer: e.target.NoAnswer.checked,
      sort: check,
      filterTag: e.target.tagname.value,
    };
    if (data.noAnswer) {
      let sortQues = allQuestion.filter((item) => item.answers === 0);
      setAllQuestion(sortQues);
      liteForm(data.sort, sortQues);
    } else {
      liteForm(data.sort, allQuesStore);
    }
  }
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
          <div
            onClick={() => {
              setStyle(
                style.display === "none"
                  ? { display: "block" }
                  : { display: "none" }
              );
            }}
            className="filte-btn"
          >
            <i className="fa-solid fa-arrow-up-wide-short fa-lg"></i>
            Filter
          </div>
        </div>
      </div>
      <form onSubmit={filterQuestion} className="filter-box" style={style}>
        <div className="filter-item-box">
          <div className="filter-item">
            <p>Filter by</p>
            <input type="checkbox" name="NoAnswer" /> <span>No answers</span>
          </div>
          <div className="filter-item">
            <p>Sorted by</p>
            <input type="radio" name="sort" value={"votes"} />{" "}
            <span> Highest votes</span>
            <br />
            <input type="radio" name="sort" value={"answers"} />{" "}
            <span>Highest answers</span>
            <br />
            <input type="radio" name="sort" value={"views"} />{" "}
            <span>Highest views</span>
          </div>
          <div className="filter-item">
            <p>Tagged with</p>
            <input type="radio" name="search" checked onChange={() => {}} />
            <span>The following tags:</span> <br />
            <input type="text" name="tagname" />
          </div>
        </div>
        <div className="filter-apply">
          <button>Apply filter</button>
          <div
            onClick={() => {
              setStyle({ display: "none" });
            }}
            className="button cancel-btn"
          >
            Cancel
          </div>
        </div>
      </form>
      <div className="content-body">
        {allQuestion.map((item, index) => (
          <ContentItem key={index} data={item}></ContentItem>
        ))}
      </div>
    </div>
  );
}
