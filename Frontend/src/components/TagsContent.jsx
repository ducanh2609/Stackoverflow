import { useEffect, useLayoutEffect, useState } from "react";
import "../css/tagspage.scss";
import TagsItemsPage from "../liteComponents/TagsItemsPage";

export default function TagsContent() {
  const [tags, setTags] = useState([]);
  const [searchTags, setsearchTags] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:8000/api/v1/tags").then(async (res) => {
      let data = await res.json();
      console.log(data);
      setTags(data);
    });
  }, []);
  useEffect(() => {
    setsearchTags(tags);
  }, [tags]);
  function searchTagsFn(e) {
    let value = [];
    if (e.target.value === "") setsearchTags(tags);
    else
      tags.forEach((item) => {
        if (item.cata_name.includes(e.target.value)) {
          value.push(item);
          setsearchTags(value);
        }
      });
  }
  function sortByName() {
    let tagsName = tags.map((item) => item.cata_name);
    tagsName.sort();
    let sortNameArr = tagsName.reduce((arr, item) => {
      arr.push(tags.find((e) => e.cata_name === item));
      return arr;
    }, []);
    setsearchTags(sortNameArr);
  }
  function sortByPoplar() {
    let tagsQuestion = tags.map((item) => item.question);
    let tagsName = tags.map((item) => item.cata_name);
    tagsQuestion.sort(function (a, b) {
      return b - a;
    });
    let sortPopularArr = tagsQuestion.reduce((arr, item) => {
      for (let i = 0; i < tags.length; i++) {
        if (
          tags[i].question === item &&
          tagsName.indexOf(tags[i].cata_name) !== -1
        ) {
          arr.push(tags[i]);
          tagsName = tagsName.filter((params) => params !== tags[i].cata_name);
          break;
        }
      }
      return arr;
    }, []);
    setsearchTags(sortPopularArr);
  }
  function sortByTime() {
    let tagsTime = tags.map((item) => item.time);
    let tagsName = tags.map((item) => item.cata_name);
    tagsTime.sort(function (a, b) {
      return b - a;
    });
    let sortTimeArr = tagsTime.reduce((arr, item) => {
      for (let i = 0; i < tags.length; i++) {
        if (
          tags[i].time === item &&
          tagsName.indexOf(tags[i].cata_name) !== -1
        ) {
          arr.push(tags[i]);
          tagsName = tagsName.filter((params) => params !== tags[i].cata_name);
          break;
        }
      }
      return arr;
    }, []);
    setsearchTags(sortTimeArr);
  }
  return (
    <div className="tags-page">
      <div className="tags-header-box">
        <p>Tags</p>
        <span>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </span>
      </div>
      <div className="tags-search">
        <div className="tags-input">
          <input
            type="text"
            name="tags-search"
            placeholder="Filter by tag name"
            onInput={searchTagsFn}
          />
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i>
        </div>

        <div>
          <span onClick={sortByPoplar}>Popular</span>
          <span onClick={sortByName}>Name</span>
          <span onClick={sortByTime}>New</span>
        </div>
      </div>
      <div className="tags-content-box">
        <div className="tags-content">
          {searchTags.map((item, index) => (
            <TagsItemsPage key={index} data={item}></TagsItemsPage>
          ))}
        </div>
      </div>
      <div className="div-page">
        <button className="previos" id="previos">
          <i className="fa-sharp fa-solid fa-backward"></i>
        </button>
        <div className="page-id" id="pageId">
          <a href="/" className="order">
            <span>1</span>
          </a>
        </div>
        <button className="next" id="next">
          <i className="fa-sharp fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}
