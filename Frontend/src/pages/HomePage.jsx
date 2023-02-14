import { useEffect } from "react";
import Header from "../components/Header";
import HomePageContent from "../liteComponents/HompageContent";
import Footer from "./../components/Footer";

export default function HomePage() {
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
  return (
    <>
      <Header />
      <HomePageContent />
      <Footer />
    </>
  );
}
