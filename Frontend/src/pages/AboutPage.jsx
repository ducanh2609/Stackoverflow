import AboutFooter from "../components/AboutFooter";
import AboutHeader from "../components/AboutHeader";
import Marrque from "../components/Marrque";
import Content2Item from "../liteComponents/Content2Item";
import Content4Item from "../liteComponents/Content4Item";
import Content6Item from "../liteComponents/Content6Item";
import Content7Item from "../liteComponents/Content7Item";
import Content9Item from "../liteComponents/Content9Item";

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
  let content4 = [
    {
      img: "/image/content4-item1.webp",
      p1: "APPEALIE SaaS Awards",
      p2: "Collaboration + Productivity",
      p3: "2021",
    },
    {
      img: "/image/content4-item2.svg",
      p1: "RemoteTech Awards",
      p2: "Developer Collaboration Platform",
      p3: "2021-2022",
    },
    {
      img: "/image/content4-item3.svg",
      p1: "The SaaS Awards",
      p2: "Best SaaS for Productivity",
      p3: "2022",
    },
    {
      img: "/image/content4-item4.webp",
      p1: "Webby",
      p2: "The Best of the Internet",
      p3: "2021",
    },
  ];
  let content6 = [
    {
      h3: "FOR TEAMS",
      p: "Where developers and technologists share private knowledge with coworkers.",
      src: "/image/content6-item1.png",
    },
    {
      h3: "TALENT",
      p: "Where companies build their employer brand to attract top tech talent",
      src: "/image/content6-item1.png",
    },
    {
      h3: "ADVERTISING",
      p: "Where companies reach the world's largest audience of developers and technologists.",
      src: "/image/content6-item1.png",
    },
    {
      h3: "COLLECTIVES",
      p: "Where developer communities connect with the specific technologies they use the most.",
      src: "/image/content6-item1.png",
    },
  ];
  let content7 = [
    {
      i1: <i className="fa-solid fa-heart fa-2x"></i>,
      i2: <i className="fa-regular fa-heart fa-2x"></i>,
      p1: "Adopt a customer-first mindset",
      p2: "Authentically serve our customers by empowering, listening, and collaborating with our fellow Stackers.",
    },
    {
      i1: <i className="fa-solid fa-hand fa-2x"></i>,
      i2: <i className="fa-regular fa-hand fa-2x"></i>,
      p1: "Be flexible and inclusive",
      p2: "We do our best work when a diverse group of people collaborate in an environment of respect and trust. Create space for different voices to be heard, and allow flexibility in how people work.",
    },
    {
      i1: <i className="fa-solid fa-compass fa-2x"></i>,
      i2: <i className="fa-regular fa-compass fa-2x"></i>,
      p1: "Be transparent",
      p2: "Communicate openly and honestly, both inside and outside the company. Encourage transparency from others by being empathetic, reliable, and acting with integrity.",
    },
    {
      i1: <i className="fa-brands fa-battle-net fa-2x"></i>,
      i2: <i className="fa-brands fa-battle-net fa-2x"></i>,
      p1: "Empower people to deliver outstanding results",
      p2: "Give people space to get their job done, support them when they need it, and practice blameless accountability.",
    },
    {
      i1: <i className="fa-solid fa-users-viewfinder fa-2x"></i>,
      i2: <i className="fa-solid fa-users-viewfinder fa-2x"></i>,
      p1: "Keep community at our center",
      p2: "Community is at the heart of everything we do. Nurture healthy communities where everyone is encouraged to learn and give back.",
    },
    {
      i1: <i className="fa-brands fa-asymmetrik fa-2x"></i>,
      i2: <i className="fa-brands fa-asymmetrik fa-2x"></i>,
      p1: "Learn, share, grow",
      p2: "Adopt a Growth Mindset. Be curious and eager to learn. Aim for ethical, sustainable, long-term growth, both personally and in the company.",
    },
  ];
  let content9 = [
    {
      i: <i className="fa-brands fa-quora fa-5x"></i>,
      p: "Check out our FAQ about how Stack Overflow works.",
      button: "Get help",
    },
    {
      i: <i className="fa-brands fa-battle-net fa-5x"></i>,
      p: "To share feedback about our platform, please visit our meta community.",
      button: "Visit Meta",
    },
    {
      i: <i className="fa-solid fa-users-viewfinder fa-5x"></i>,
      p: "Looking for help with Stack Overflow for Teams ?",
      button: "Teams help",
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
        <div className="about-content3">
          <p>
            Stack Overflow helps people find the answers they need, when they
            need them. We're best known for our public Q&A platform that over
            100 million people visit every month to ask questions, learn, and
            share technical knowledge.
          </p>
          <p>
            Our products and tools empower people to find what they need to
            develop technology at work or at home. These products include,
            <a href="/about"> Stack Overflow for Teams</a>,
            <a href="/about"> Stack Overflow Advertising</a>,
            <a href="/about"> Collectives™ on Stack Overflow</a> , and
            <a href="/about">Stack Overflow Talent</a>.
          </p>
        </div>
        <div className="about-content4">
          {content4.map((item, index) => (
            <Content4Item
              key={index}
              img={item.img}
              p1={item.p1}
              p2={item.p2}
              p3={item.p3}
            ></Content4Item>
          ))}
        </div>
        <div className="our-products-title">
          <span></span>
          <span>Our products</span>
          <span></span>
        </div>
        <div className="about-content5">
          <img src="/image/StackOF.png" alt="" />
          <p style={{ fontWeight: "700" }}>Our Public Platform</p>
          <p style={{ color: "rgb(103, 103, 101)" }}>
            Where developers and technologists go to gain and shake knowledge.{" "}
          </p>
          <button>
            <span>Participate</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
        <div className="about-content6">
          {content6.map((item, index) => (
            <Content6Item
              key={index}
              h3={item.h3}
              p={item.p}
              src={item.src}
            ></Content6Item>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "rgb(103, 103, 101)" }}>
          Used by thousands of organizations around the globe
        </p>
        <Marrque />
        <div className="our-products-title">
          <span></span>
          <span>Our core values</span>
          <span></span>
        </div>
        <div className="about-content7">
          {content7.map((item, index) => (
            <Content7Item
              key={index}
              i1={item.i1}
              i2={item.i2}
              p1={item.p1}
              p2={item.p2}
            ></Content7Item>
          ))}
        </div>
        <div className="about-content8">
          <div className="content8-item content8-left">
            <p style={{ fontSize: "27px", fontWeight: "600" }}>Where we work</p>
            <p>
              We’re proud to be a remote first company working across many
              timezones, with offices in New York, London, Austin and Munich *
            </p>
            <div>
              <button>Current job openings</button>
              <button
                style={{
                  backgroundColor: "#36a1f381",
                  color: "rgb(48, 100, 221)",
                }}
              >
                Contact us
              </button>
            </div>
          </div>
          <div className="content8-item content8-right">
            <div>
              <div>
                <img src="/image/content8-right.png" alt="" />
              </div>
              <div>
                <p>HQ</p>
                <p>New York</p>
                <p style={{ fontSize: "15px" }}>
                  Stack Exchange Inc. 110 William Street 28th Floor New York, NY
                  10038
                </p>
              </div>
            </div>
            <p>
              * All employees are currently
              <a href="/about"> working fully remote</a> .
            </p>
          </div>
        </div>
        <div className="about-content9">
          {content9.map((item, index) => (
            <Content9Item
              key={index}
              i={item.i}
              p={item.p}
              button={item.button}
            ></Content9Item>
          ))}
        </div>
      </div>
      <AboutFooter />
    </div>
  );
}
