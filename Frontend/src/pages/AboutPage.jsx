import AboutFooter from "../components/AboutFooter";
import AboutHeader from "../components/AboutHeader";
import Marrque from "../components/Marrque";
import Content2Item from "../liteComponents/Content2Item";

export default function AboutPage() {
  let content2 = [
    {
      p1: "100+ million",
      p2: "Monthly visitors to our network",
    },
    {
      p1: "21+ million",
      p2: "Questions asked to-date",
    },
    {
      p1: "13.6 seconds",
      p2: "Average time between new questions",
    },
    {
      p1: "50.6+ billion",
      p2: "Times a developer got help",
    },
    {
      p1: "10,000+",
      p2: "Customer companies for all products",
    },
  ];
  return (
    <div className="about-page">
      <AboutHeader />
      <div className="about-content">
        <div className="about-content1">
          <img src="/image/bg-header-mobile.png" alt="" />
          <div className="contect1-text">
            <p className="contect1-text1">Who we are</p>
            <p className="contect1-text2">
              Empowering the world to develop technology through collective
              knowledge.
            </p>
            <p className="contect1-text1">
              Our public platform <b>serves 100 million people every month</b>,
              making it one of the most popular websites in the world.
            </p>
            <p className="contect1-text1">
              Our asynchronous knowledge management and collaboration offering,
              <b> Stack Overflow for Teams</b>, is transforming how people work.
            </p>
          </div>
        </div>
        <div className="about-content2">
          {content2.map((item, index) => (
            <Content2Item key={index} p1={item.p1} p2={item.p2}></Content2Item>
          ))}
        </div>
        <Marrque />
      </div>
      <AboutFooter />
    </div>
  );
}
