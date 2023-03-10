import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/tagspage.scss";
import TagsItemsPage from "../liteComponents/TagsItemsPage";
import DivPage from "./DivPage";

export default function TagsContent() {
  let params = useParams();
  const [tags, setTags] = useState([]);
  const [searchTags, setsearchTags] = useState([]);
  const [divPage, setDivPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(params.title);
  useLayoutEffect(() => {
    fetch("http://localhost:8000/api/v1/tags").then(async (res) => {
      let data = await res.json();
      setTags(data);
      let number = [];
      let divLength = Math.ceil(data.length / 24);
      for (let i = 0; i < divLength; i++) {
        number.push({ number: i + 1 });
      }
      setDivPage(number);
    });
  }, []);
  useEffect(() => {
    setCurrentPage(params.title);
  }, [params]);
  useEffect(() => {
    if (tags.length !== 0) {
      let search = [];
      for (let i = (currentPage - 1) * 24; i < currentPage * 24; i++) {
        if (i === tags.length) break;
        else search.push(tags[i]);
      }
      setsearchTags(search);
      console.log(search);
    }
  }, [tags, currentPage]);
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
    setTags(sortNameArr);
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
    setTags(sortPopularArr);
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
    setTags(sortTimeArr);
  }
  return (
    <div className="tags-page da-10">
      <div className="tags-header-box da-10">
        <p>Tags</p>
        <span className="da-10">
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </span>
      </div>
      <div className="tags-search">
        <div className="tags-input da-10">
          <input
            className="da-10"
            type="text"
            name="tags-search"
            placeholder="Filter by tag name"
            onInput={searchTagsFn}
          />
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i>
        </div>

        <div className="da-0">
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
      <DivPage
        divPage={divPage}
        currentPage={currentPage}
        status="tags"
      ></DivPage>
    </div>
  );
}
