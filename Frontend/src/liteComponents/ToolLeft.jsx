import { Link } from "react-router-dom";

export default function ToolLeft(props) {
  return (
    <div className="tool-left" style={props.style}>
      <div className="home-btn">
        <a href="/">Home</a>
      </div>
      <div className="public">
        <p>PUBLIC</p>
        <div className="question-menu">
          <div className="question-link active">
            <div>
              <i className="fa-solid fa-earth-americas fa-lg"></i>
            </div>
            <Link to="/questions">Questions</Link>
          </div>
          <div className="tag-link">
            <div></div>
            <Link>Tags</Link>
          </div>
          <div className="user-link">
            <div></div>
            <Link>Users</Link>
          </div>
          <div className="company-link">
            <div></div>
            <Link>Companies</Link>
          </div>
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
