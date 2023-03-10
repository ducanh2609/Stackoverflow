import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import OkUserHeader from "../components/OkUserHeader";
import "../css/askpage.scss";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import Loading from "../components/Loading";
import Toast from "../subComponentsHp/Toast";

export default function AskPage() {
  const [code, setCode] = useState("");
  const [content, setContent] = useState("");
  const [flag, setFlag] = useState(0);
  const [toastList, setToastList] = useState({});

  useEffect(() => {
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
        setToastList({ status: "Error", message: "Bạn chưa đăng nhập" });
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setFlag(1);
      }
    });
  }, []);
  function sendQuestion(e) {
    e.preventDefault();
    let userIndex = document.cookie.indexOf(";");
    let data = {
      user_id: document.cookie.slice(7, userIndex),
      title: e.target.title.value,
      code: code,
      text: content,
      tag: e.target.tags.value,
    };
    if (data.title === "" || data.text.length < 20 || data.tag === "") {
      setToastList({
        status: "Error",
        message: '(*) Các trường có dấu " * " không được để trống.',
      });
    } else {
      fetch("http://localhost:8000/api/v1/question/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        let message = await res.json();
        if (message.message === "Post successfully") {
          setToastList({
            status: "Success",
            message: "Gửi câu hỏi thành công",
          });
          setTimeout(() => {
            window.location.href = "/questions/home";
          }, 2000);
        }
      });
    }
  }
  function sendCode(e) {
    setCode(e.target.innerText);
  }
  return (
    <>
      <Toast toastArray={toastList}></Toast>
      {flag === 0 ? (
        <Loading />
      ) : (
        <div className="ask-page da-10">
          <OkUserHeader />
          <div className="ask-content da-10">
            <div className="ask-header">
              <p className="da-10">Ask a public question</p>
              <div className="ask-header-image da-0"></div>
            </div>
            <div className="ask-title-box da-10">
              <p>Writing a good question</p>
              <p>
                You’re ready to <a href="/question/ask"> ask</a> a
                <a href="/"> programming-related question</a> and this form will
                help guide you through the process. Looking to ask a
                non-programming question? See <a href="/"> the topics here</a>{" "}
                to find a relevant site.
              </p>
              <ul>
                <b>Steps</b>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>
                  Describe what you tried and what you expected to happen.
                </li>
                <li>
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li>Review your question and post it to the site.</li>
              </ul>
            </div>
            <form onSubmit={sendQuestion} className="question-text-form da-10">
              <div className="ask-title da-10">
                <p>Title (*)</p>
                <p>
                  Be specific and imagine you’re asking a question to another
                  person.
                </p>
                <input
                  name="title"
                  type="text"
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                />
              </div>
              <div className="ask-code da-10">
                <p>What are the details of your problem?</p>
                <p>
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </p>
                <SunEditor onKeyDown={sendCode} />
              </div>
              <div className="ask-code ask-text-content da-10">
                <p>What did you try and what were you expecting? (*)</p>
                <p>
                  Describe what you tried, what you expected to happen, and what
                  actually resulted. Minimum 20 characters.
                </p>
                <SunEditor
                  onChange={(e) => {
                    setContent(e.slice(3, e.length - 4));
                  }}
                />
              </div>
              <div className="ask-title ask-tags da-10">
                <p>Tags (*)</p>
                <p>
                  Add up to 5 tags to describe what your question is about.
                  Start typing to see suggestions.
                </p>
                <input
                  name="tags"
                  type="text"
                  placeholder="e.g. (ios sql-server regex)"
                />
              </div>
              <button>Send question</button>
            </form>
          </div>
          <div className="ask-note da-0">
            <div>Writing a good title</div>
            <div>
              <img src="/image/pencil.webp" alt="" />
              <p>
                Your title should summarize the problem. <br /> <br /> You might
                find that you have a better idea of your title after writing out
                the rest of the question.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
