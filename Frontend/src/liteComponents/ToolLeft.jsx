export default function ToolLeft(props) {
  let url = window.location.href;
  return (
    <div className="tool-left" style={props.style}>
      <div className={url.includes("/home") ? "home-btn active" : "home-btn"}>
        <a href="/">Home</a>
      </div>
      <div className="public">
        <p>PUBLIC</p>
        <div className="question-menu">
          <div
            className={
              url.includes("/allquestions")
                ? "question-link active"
                : "question-link"
            }
          >
            <div>
              <i className="fa-solid fa-earth-americas fa-lg"></i>
            </div>
            <a href="/questions/allquestions">Questions</a>
          </div>
          <div className="tag-link">
            <div></div>
            <a href="/questions/tags">Tags</a>
          </div>
          <div className="user-link">
            <div></div>
            <a href="/questions/users">Users</a>
          </div>
          <div className="company-link">
            <div></div>
            <a href="/">Companies</a>
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
