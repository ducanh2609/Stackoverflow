import { useParams } from "react-router-dom";

export default function ToolLeft(props) {
  let param = useParams();
  return (
    <div className="tool-left" style={props.style}>
      <a
        href="/"
        className={param.element === "home" ? "home-btn active" : "home-btn"}
      >
        Home
      </a>
      <div className="public">
        <p>PUBLIC</p>
        <div className="question-menu">
          <a
            href="/questions/allquestions"
            className={
              param.element === "allquestions" || param.element === "detail"
                ? "question-link active"
                : "question-link"
            }
          >
            <div>
              <i className="fa-solid fa-earth-americas fa-lg"></i>
            </div>
            <p>Questions</p>
          </a>
          <a
            href="/questions/tags"
            className={
              param.element === "tags" ? "tags-link active" : "tags-link"
            }
          >
            <div></div>
            <p>Tags</p>
          </a>
          <a
            href="/questions/users"
            className={
              param.element === "users" ? "user-link active" : "user-link"
            }
          >
            <div></div>
            <p>Users</p>
          </a>
          <a
            href="/questions/companies"
            className={
              param.element === "companies"
                ? "company-link active"
                : "company-link"
            }
          >
            <div></div>
            <p>Companies</p>
          </a>
        </div>
      </div>
      <div className="collectives">
        <p>COLLECTIVES</p>
        <a href="/">
          <i className="fa-brands fa-old-republic fa-lg"></i>Explore Collectives
        </a>
      </div>
      <div className="teams">
        <p>TEAMS</p>
        <div className="team-box">
          <p>
            <b>Stack Overflow for Teams</b> – Start collaborating and sharing
            organizational knowledge.
          </p>
          <img src="/image/teams.svg" alt="" /> <br />
          <button>Create a free teams</button> <br />
          <a href="/">Why teams?</a>
        </div>
      </div>
    </div>
  );
}
