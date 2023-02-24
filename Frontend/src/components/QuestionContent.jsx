import { Link, useParams } from "react-router-dom";
import ContentItem from "../liteComponents/ContentItem";
import { useDispatch, useSelector } from "react-redux";
import { allQuestionSlice } from "../reducers/questionSlice";
import { useEffect, useState } from "react";
import "../css/filterbox.scss";
import { getQuestion, getTag } from "../redux/selector";
import { tagQuesSlice } from "../reducers/tagQuesSlice";

export default function QuestionContent(props) {
  let params = useParams();
  const [style, setStyle] = useState({ display: "none" });
  const dispatch = useDispatch();
  const allQuesStore = useSelector(getQuestion).allQuestion;
  const tagQues = useSelector(getTag).tagQues;

  let [allQuestion, setAllQuestion] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/question").then(async (res) => {
      let data = await res.json();
      if (params.element === "home") {
        let vote = data.map((item) => item.vote);
        vote.sort((a, b) => b - a);
        let sortQues = vote.reduce((arr, item) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].vote === item) {
              arr.push(data[i]);
              data = data.filter((k, index) => index !== i);
            }
          }
          return arr;
        }, []);
        dispatch(allQuestionSlice.actions.allQuestion(sortQues));
      } else dispatch(allQuestionSlice.actions.allQuestion(data));
    });
    if (params.title) dispatch(tagQuesSlice.actions.tagQues(params.title));
  }, [dispatch, params]);
  useEffect(() => {
    let tagQuesArr = allQuesStore.filter(
      (item) =>
        item.cata_name.indexOf(tagQues) !== -1 ||
        item.title.indexOf(tagQues) !== -1
    );
    params.title ? setAllQuestion(tagQuesArr) : setAllQuestion(allQuesStore);
  }, [allQuesStore, tagQues, params.title]);
  function sortForm(value, ques, str, tagname) {
    let sortQues;
    if (value === "") {
      sortQues = ques;
    } else {
      value.sort((a, b) => b - a);
      sortQues = value.reduce((arr, item) => {
        for (let i = 0; i < ques.length; i++) {
          if (ques[i][str] === item) {
            arr.push(ques[i]);
            ques = ques.filter((k, index) => index !== i);
          }
        }
        return arr;
      }, []);
    }
    if (tagname !== "") {
      let sortTagQues = sortQues.filter((item) =>
        item.cata_name.includes(tagname)
      );
      setAllQuestion(sortTagQues);
    } else setAllQuestion(sortQues);
  }
  function liteForm(sort, arr, tagname) {
    if (sort === "votes") {
      let sortVote = arr.map((item) => item.vote);
      sortForm(sortVote, arr, "vote", tagname);
    } else if (sort === "answers") {
      let sortAnswer = arr.map((item) => item.answers);
      sortForm(sortAnswer, arr, "answers", tagname);
    } else if (sort === "views") {
      let sortView = arr.map((item) => item.view);
      sortForm(sortView, arr, "view", tagname);
    } else {
      sortForm("", arr, "view", tagname);
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
      let sortQues = allQuesStore.filter((item) => item.answers === 0);
      liteForm(data.sort, sortQues, data.filterTag);
    } else {
      liteForm(data.sort, allQuesStore, data.filterTag);
    }
  }
  return (
    <div className="question-content da-10">
      <div className="content-header da-10">
        <div className="content-header-top">
          {params.title ? (
            <p>
              {props.title} [{params.title}]
            </p>
          ) : (
            <p>{props.title}</p>
          )}
          <button className="da-4">
            <Link to="/questions/ask" style={{ color: "white" }}>
              Ask Question
            </Link>
          </button>
        </div>
        <div className="content-header-bottom">
          <p className="da-0">{allQuestion.length} questions</p>
          <div className="content-navbar da-8">
            <div className="nav-item">Newest</div>
            <div className="nav-item">Active</div>
            <div className="nav-item da-0">
              Bountied <span>0</span>
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
            className="filte-btn da-2"
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
            <input
              type="radio"
              name="search"
              checked
              onChange={() => {}}
            />{" "}
            <span> The following tags:</span> <br />
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
