import { Link } from "react-router-dom";
import Header from "../components/Header";
import LoginLink from "../liteComponents/Login-Link";

export default function LoginPage() {
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
        <form className="login-form">
          <label htmlFor="email">Email</label> <br />
          <input name="email" type="text" /> <br />
          <label htmlFor="password">Password</label>
          <span>Forgot password?</span>
          <br />
          <input name="password" type="text" /> <br />
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
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
