import { useEffect } from "react";
import Header from "../components/Header";
import HomePageContent from "../liteComponents/HompageContent";
import Footer from "./../components/Footer";

export default function HomePage() {
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
      if (message.message === "OK") {
        window.location.href = "/questions/home";
      }
    });
  }, []);
  return (
    <>
      <Header />
      <HomePageContent />
      <Footer />
    </>
  );
}
