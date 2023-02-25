import FooterList from "../liteComponents/FooterList";

export default function AboutFooter() {
  let stack = ["About", "Press", "Work Here", "Contact Us", "Questions"];
  let product = ["Teams", "Advertising", "Collectives", "Talent"];
  let policies = [
    "Legal",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Settings",
    "Cookie Policy",
  ];
  let channel = [
    "Blog",
    "Podcast",
    "Newsletter",
    "Twitter",
    "LinkedIn",
    "Instagram",
  ];

  let item = [
    {
      class: "about-footer-item da-10",
      content: "STACK OVERFLOW",
      fn: stack,
    },
    {
      class: "about-footer-item da-10",
      content: "PRODUCTS",
      fn: product,
    },
    {
      class: "about-footer-item da-10",
      content: "POLICIES",
      fn: policies,
    },
    {
      class: "about-footer-item da-10",
      content: "CHANNELS",
      fn: channel,
    },
  ];
  return (
    <div className="about-footer footer">
      <div className="about-footer-box">
        <div className="footer-logo about-logo">
          <a href="/">
            <img src="/image/StackOF.png" alt="" />
          </a>
        </div>
        {item.map((item, index) => (
          <FooterList
            key={index}
            class={item.class}
            content={item.content}
            fn={item.fn}
          ></FooterList>
        ))}
      </div>
    </div>
  );
}
