import { useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import HomePageContent from "../liteComponents/HompageContent";
import Footer from "./../components/Footer";

export default function HomePage() {
  const [flag, setFlag] = useState(0);
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
        window.location.href = "/questions/home";
      } else {
        setFlag(1);
      }
    });
  }, []);
  return (
    <>
      {flag === 0 ? (
        <Loading />
      ) : (
        <>
          <Header />
          <HomePageContent />
          <Footer />
        </>
      )}
    </>
  );
}
