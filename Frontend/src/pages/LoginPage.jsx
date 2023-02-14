import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import LoginLink from "../liteComponents/Login-Link";

export default function LoginPage() {
  const [errStyle, setErrStyle] = useState({ display: "none" });
  const [errMes, setErrMes] = useState("");
  useEffect(() => {
    let data = {
      sessionID: document.cookie.slice(10),
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
        window.location.href = "/questions";
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
  function sendLogin(e) {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (data.email === "" || data.password === "") {
      setErrMes("Các trường nhập không được để trống");
      setErrStyle({ display: "block" });
    } else {
      fetch(`http://localhost:8000/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        let message = await res.json();
        if (
          message.message === "Tài khoản không tồn tại" ||
          message.message === "Sai mật khẩu"
        ) {
          setErrMes(message.message);
          setErrStyle({ display: "block" });
        } else {
          let token = message.sessionID;
          const d = new Date();
          d.setTime(d.getTime() + 90 * 24 * 60 * 60 * 1000);
          let expires = "expires=" + d.toUTCString();
          document.cookie = "sessionID = " + token + ";" + expires + ";path=/";
          window.location.href = "/questions";
        }
      });
    }
  }
  return (
    <>
      <Header />
      <div className="login-page">
        <div className="logo-homepage">
          <Link to="/">
            <img src="/image/StackOF.png" alt="" />
          </Link>
        </div>
        {loginLink.map((item, index) => (
          <LoginLink
            key={index}
            class={item.class}
            content={item.content}
            src={item.src}
            style={item.style}
          ></LoginLink>
        ))}
        <form onSubmit={sendLogin} className="login-form">
          <p className="errorNotify" style={errStyle}>
            <i>{errMes}</i>
          </p>
          <label htmlFor="email">Email</label> <br />
          <input name="email" type="email" /> <br />
          <label htmlFor="password">Password</label>
          <span>Forgot password?</span>
          <br />
          <input name="password" type="password" /> <br />
          <button>Log in</button>
        </form>
        <div className="login-footer">
          <p>
            Don't have an acount?<Link to="/signup"> Sign up</Link>
          </p>
          <p>
            Are you an employer?
            <Link to="/">
              Sign up on Talent
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
