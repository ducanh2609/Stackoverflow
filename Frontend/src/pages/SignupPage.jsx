import { Link } from "react-router-dom";
import Header from "../components/Header";
import IntroItem from "../liteComponents/IntroductItem";
import LoginLink from "../liteComponents/Login-Link";

import { useLayoutEffect, useState } from "react";
import Toast from "../subComponentsHp/Toast";

export default function SignupPage() {
  const [toastList, setToastList] = useState({});

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
      if (message.message === "OK") {
        window.location.href = "/";
      }
    });
  }, []);
  let loginLink = [
    {
      class: "login-google",
      content: "Log in with Google",
      src: <img alt="" src="/image/Google_Logo.png" />,
      style: {
        border: " 1px solid rgb(183 183 183)",
        backgroundColor: "white",
      },
    },
    {
      class: "login-github",
      content: "Log in with GitHub",
      src: <i className="fa-brands fa-github fa-lg"></i>,
      style: {
        backgroundColor: "rgb(47 51 55)",
        color: "white",
      },
    },
    {
      class: "login-facebook",
      content: "Log in with Facebook",
      src: <i className="fa-brands fa-square-facebook fa-lg"></i>,
      style: {
        backgroundColor: "rgb(56 84 153)",
        color: "white",
      },
    },
  ];
  let introItem = [
    {
      element: <i className="fa-brands fa-square-js fa-2x"></i>,
      content: "Get unstuck — ask a question",
    },
    {
      element: <i className="fa-solid fa-up-down fa-2x"></i>,
      content: "Unlock new privileges like voting and commenting",
    },
    {
      element: <i className="fa-solid fa-sheet-plastic fa-2x"></i>,
      content: "Save your favorite tags, filters, and jobs",
    },
    {
      element: <i className="fa-solid fa-trophy fa-2x"></i>,
      content: "Earn reputation and badges",
    },
  ];
  function reCaptcha(e) {
    console.log(e.target);
  }
  function sendSignin(e) {
    e.preventDefault();
    let data = {
      username: e.target.displayName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      captcha: e.target.captcha.checked,
      checkBonus: e.target.checkBonus.checked,
      image: "/image/profile_header.png",
      address: "",
    };
    if (data.username === "" || data.username === "" || data.password === "") {
      setToastList({
        status: "Error",
        message: "Các trường nhập không được để trống",
      });
    } else if (data.captcha === false) {
      setToastList({
        status: "Error",
        message: "Bạn có phải là robot?",
      });
    } else {
      fetch("http://localhost:8000/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        let message = await res.json();
        if (message.message === "Post successfully") {
          setToastList({ status: "Success", message: "Đăng kí thành công" });
          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
        } else {
          setToastList({ status: "Error", message: message.message });
        }
      });
    }
  }
  return (
    <>
      <Toast toastArray={toastList}></Toast>
      <Header />
      <div className="signup-page da-9">
        {loginLink.map((item, index) => (
          <LoginLink
            key={index}
            class={item.class}
            content={item.content}
            src={item.src}
            style={item.style}
          ></LoginLink>
        ))}
        <form onSubmit={sendSignin} className="signup-form">
          <label htmlFor="email">Display name</label> <br />
          <input name="displayName" type="text" /> <br />
          <label htmlFor="email">Email</label> <br />
          <input name="email" type="email" /> <br />
          <label htmlFor="password">Password</label>
          <br />
          <input name="password" type="password" /> <br />
          <p>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </p>
          <div className="captcha">
            <div className="captcha-box">
              <div className="captcha-check">
                <input name="captcha" type="checkbox" />
                <p>I'm not a robot</p>
              </div>
              <img onClick={reCaptcha} src="/image/captcha.png" alt="" />
            </div>
          </div>
          <div className="checkbox-box">
            <input name="checkBonus" type="checkbox" />
            <p>
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </p>
          </div>
          <button>Sign Up</button>
          <p>
            By clicking “Sign up”, you agree to our
            <a href="/"> terms of service, privacy policy</a> and
            <a href="/"> cookie policy</a>
          </p>
        </form>
        <div className="signup-footer">
          <p>
            Already have an acount?<Link to="/login"> Log in</Link>
          </p>
          <p>
            Are you an employer?
            <a href="/">
              Sign up on Talent
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </p>
        </div>
        <div className="introduct da-0">
          <div className="intro-title">Join the Stack Overflow community</div>
          {introItem.map((item, index) => (
            <IntroItem
              key={index}
              element={item.element}
              content={item.content}
            ></IntroItem>
          ))}
          <div>
            <p>
              Collaborate and share knowledge with a private group for FREE.
              <br />
              <a href="/">
                Get Stack Overflow for Teams free for up to 50 users.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
