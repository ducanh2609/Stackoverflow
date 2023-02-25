import { useState } from "react";
import "../css/companiespage.scss";

export default function CompaniesContent() {
  const [style, setStyle] = useState({ display: "none" });
  function filterCompanies() {
    setStyle(
      style.display === "none" ? { display: "block" } : { display: "none" }
    );
  }
  return (
    <div className="companies-page da-10">
      <div className="companies-header-box">
        <p>Companies</p>
        <span>Learn about what it's like to work at companies</span>
      </div>
      <div className="companies-seach-box">
        <i className="fa-sharp fa-solid fa-magnifying-glass fa-2x"></i>
        <input
          className="da-10"
          type="text"
          placeholder="Search all companies"
        />{" "}
        <br />
        <input
          className="da-10"
          type="text"
          placeholder="Search company by location"
        />{" "}
        <br />
        <button>Search</button>
        <div className="da-10">
          <div className="companies-filter-box da-10" style={style}>
            <p>Company tech stack</p>
            <span>Add up to ten tech tags</span> <br />
            <input type="text" placeholder="e.g. html, c#" />
            <div>
              <button>Apply filter</button>
              <div className="button">Cancel</div>
            </div>
          </div>
        </div>
        <button onClick={filterCompanies}>
          Filter by tag <i className="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
  );
}
