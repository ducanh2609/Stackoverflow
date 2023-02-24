import FooterList from "../liteComponents/FooterList";

export default function Footer() {
  let stack = ["Question", "Help"];
  let product = ["Teams", "Advertising", "Collectives", "Talent"];
  let conpany = [
    "About",
    "Press",
    "Work Here",
    "Legal",
    "Privacy Policy",
    "Terms of Service",
    "Contact Us",
    "Cookie Settings",
    "Cookie Policy",
  ];
  let net = [
    "Technology",
    "Culture & recreation",
    "Life & arts",
    "Science",
    "Professional",
    "Business",
    "API",
    "Data",
  ];
  let item = [
    {
      class: "stack-footer",
      content: "STACK OVERFLOW",
      fn: stack,
    },
    {
      class: "product-footer",
      content: "PRODUCTS",
      fn: product,
    },
    {
      class: "company-footer",
      content: "COMPANY",
      fn: conpany,
    },
    {
      class: "network-footer",
      content: "STACK EXCHANGE NETWORK",
      fn: net,
    },
  ];
  return (
    <div className="footer">
      <div className="footer-box da-10">
        <div className="footer-logo da-0">
          <a href="/">
            <img className="da-0" src="/image/StackOF.png" alt="" />
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
        <div className="contact-footer">
          <a href="/">Blog</a>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">LinkedIn</a>
          <a href="/">Instagram</a>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2023.2.9.43231
          </p>
        </div>
      </div>
    </div>
  );
}
