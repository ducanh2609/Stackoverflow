import QuestionHeader from "../components/QuestionHeader";
import Footer from "../components/Footer";
import OverflowDiv4 from "../liteComponents/OverflowDiv4";
import CollectionItem from "../liteComponents/CollectionItem";
import TagsItem from "../liteComponents/TagsItem";
import HotNetQues from "../liteComponents/HotQuestion";
import { useLayoutEffect, useState } from "react";
import OkUserHeader from "../components/OkUserHeader";
import ToolLeft from "../liteComponents/ToolLeft";
import QuestionContent from "../components/QuestionContent";
import DetailPage from "../components/Detail";
import TagsContent from "../components/TagsContent";
import UserContent from "../components/UserContent";
import { useParams } from "react-router-dom";
import CompaniesContent from "../components/CompaniesContent";
import ProfilePage from "./ProfilePage";

export default function QuestionPage() {
  let param = useParams();
  const [login, setLogin] = useState(0);
  const [tags, setTags] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:8000/api/v1/tags").then(async (res) => {
      let data = await res.json();
      console.log(data);
      setTags(data);
    });
  }, []);
  useLayoutEffect(() => {
    let userIndex = document.cookie.indexOf(";");
    let sessIndex = document.cookie.indexOf("sessionID=");
    let data = {
      sessionID: document.cookie.slice(sessIndex + 10),
      userID: document.cookie.slice(7, userIndex),
    };
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      let message = await res.json();
      if (message.message === "Not Session") {
        setLogin(0);
      } else {
        setLogin(1);
      }
    });
  }, []);
  let overflow4 = [
    {
      title: "Accessibility Update: Colors",
      element: <i className="fa-lg fa-regular fa-message"></i>,
    },
    {
      title: "Collectives: The next iteration",
      element: <i className="fa-lg fa-brands fa-stack-overflow"></i>,
    },
    {
      title: "Temporary policy: ChatGPT is banned",
      element: <i className="fa-lg fa-brands fa-stack-overflow"></i>,
    },
    {
      title: "We???ve made changes to our Privacy Notice for Collectives???",
      element: <i className="fa-lg fa-brands fa-stack-overflow"></i>,
    },
  ];
  let collectItem = [
    {
      src: "/image/twilio.svg",
      name: "Twilio",
      member: "7k Members",
      content:
        "Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the...",
    },
    {
      src: "/image/aws.png",
      name: "AWS",
      member: "6k Members",
      content:
        "Amazon Web Services (AWS) is the world???s most comprehensive and broadly adopted...",
    },
    {
      src: "/image/MicrosoftAzua.png",
      name: "Microsoft Azure",
      member: "2k Members",
      content:
        "On-premises, hybrid, multicloud, or at the edge???build on your terms with best-in-class...",
    },
  ];
  let hotNetQues = [
    {
      icon: <i className="fa-brands fa-typo3 fa-lg"></i>,
      question:
        " Why is turkey campaigning to get their name changed to t??rkiye in english but not other languages",
    },
    {
      icon: <i className="fa-solid fa-user-ninja fa-lg"></i>,
      question: "Djinn in modern times",
    },
    {
      icon: <i className="fa-solid fa-message"></i>,
      question: "How to talk to parents about my mental health",
    },
    {
      icon: <i className="fa-solid fa-book-open"></i>,
      question: "Roll a painted cube",
    },
    {
      icon: <i className="fa-solid fa-ethernet"></i>,
      question:
        "When quoting issuing commands to multiple individuals, should each new person be a new paragraph?",
    },
    {
      icon: <i className="fa-solid fa-message"></i>,
      question:
        "What is the meaning of ???we can't offer to further consider this paper in its current shape????",
    },
    {
      icon: <i className="fa-solid fa-ethernet"></i>,
      question: "How to get better at taking constructive criticism",
    },
    {
      icon: <i className="fa-solid fa-medal"></i>,
      question:
        'Is it possible to tell the difference between a young star that is just "big" and an older red giant?',
    },
    {
      icon: <i className="fa-solid fa-building-shield"></i>,
      question: "Human oriented string comparison",
    },
    {
      icon: <i className="fa-solid fa-table-list"></i>,
      question: "In TCL SCRIPT, how to add dict or array",
    },
    {
      icon: <i className="fa-solid fa-message"></i>,
      question: "High School forced labor for grades?",
    },
    {
      icon: <i className="fa-solid fa-shield"></i>,
      question: "Why is 1Password sign-in to new device secure without MFA?",
    },
  ];

  return (
    <>
      {login === 0 ? <QuestionHeader /> : <OkUserHeader />}
      <div className="content-box da-10">
        <ToolLeft></ToolLeft>
        {param.element === "tags" ? (
          <TagsContent />
        ) : param.element === "companies" ? (
          <CompaniesContent />
        ) : param.element === "profile" ? (
          <ProfilePage />
        ) : param.element === "users" ? (
          <UserContent />
        ) : (
          <div className="tool-right da-10">
            {param.element === "allquestions" ? (
              <QuestionContent title="All Question"></QuestionContent>
            ) : param.element === "home" ? (
              <QuestionContent title="Top Question"></QuestionContent>
            ) : param.element === "detail" ? (
              <DetailPage></DetailPage>
            ) : (
              ""
            )}
            <div className="right-box da-0">
              <div className="overflow-blog">
                <div className="overflow-div1">
                  <p>The Overflow Blog</p>
                </div>
                <div className="overflow-div2">
                  <i className="fa-solid fa-pen"></i>
                  <p>
                    Engineering???s hidden bottleneck: pull requests <br />
                    <span>
                      <i>sponsored post</i>
                    </span>
                  </p>
                </div>
                <div className="overflow-div2">
                  <i className="fa-solid fa-pen"></i>
                  <p>
                    Three layers to secure a software development organization
                  </p>
                </div>
                <div className="overflow-div3">
                  <p>Featured on Meta</p>
                </div>
                {overflow4.map((item, index) => (
                  <OverflowDiv4
                    key={index}
                    title={item.title}
                    element={item.element}
                  ></OverflowDiv4>
                ))}
              </div>
              <div className="collectives-title">
                <div className="collectives-header">
                  <p style={{ fontSize: "18px" }}>Collectives</p>
                  <p style={{ color: "blue" }}>see all</p>
                </div>
                {collectItem.map((item, index) => (
                  <CollectionItem
                    key={index}
                    src={item.src}
                    name={item.name}
                    member={item.member}
                    content={item.content}
                  ></CollectionItem>
                ))}
              </div>
              <div className="related-tags">
                <div className="tags-header">Related Tags</div>
                <div className="tag-item-box">
                  {tags.map((item, index) => (
                    <TagsItem
                      key={index}
                      title={item.cata_name}
                      count={item.question}
                    ></TagsItem>
                  ))}
                </div>
                <div className="more-btn">more related tags</div>
              </div>
              <div className="hot-network-ques">
                <div className="tags-header">Hot Network Questions</div>
                <div className="tag-item-box quetion-item-box">
                  {hotNetQues.map((item, index) => (
                    <HotNetQues
                      key={index}
                      icon={item.icon}
                      question={item.question}
                    ></HotNetQues>
                  ))}
                </div>
                <div className="more-btn">more hot questions</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
