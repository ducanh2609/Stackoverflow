import { Link } from "react-router-dom";
import ContentItem from "../liteComponents/ContentItem";

export default function QuestionContent() {
  return (
    <div className="question-content">
      <div className="content-header">
        <div className="content-header-top">
          <p>All Questions</p>
          <button>
            <Link to="/question/ask" style={{ color: "white" }}>
              Ask Question
            </Link>
          </button>
        </div>
        <div className="content-header-bottom">
          <p>23,485,408 questions</p>
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
        <ContentItem></ContentItem>
      </div>
    </div>
  );
}
