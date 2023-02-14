import MarqueeItem from "../liteComponents/MarqueeItem";

export default function Marrque() {
  let marquee = [
    {
      src: "/image/slice1.svg",
    },
    {
      src: "/image/slice2.svg",
    },
    {
      src: "/image/slice3.svg",
    },
    {
      src: "/image/slice4.svg",
    },
    {
      src: "/image/slice5.svg",
    },
    {
      src: "/image/slice6.svg",
    },
    {
      src: "/image/slice7.svg",
    },
    {
      src: "/image/slice8.svg",
    },
    {
      src: "/image/slice9.svg",
    },
  ];
  return (
    <section className="logoMarqueeSection">
      <div id="logoMarqueeSection">
        <div className="default-content-container flex items-center">
          <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
            <div className="marquee" style={{ animationDuration: "30s" }}>
              {marquee.map((item, index) => (
                <MarqueeItem key={index} src={item.src}></MarqueeItem>
              ))}
            </div>
            <div className="marquee" style={{ animationDuration: "30s" }}>
              {marquee.map((item, index) => (
                <MarqueeItem key={index} src={item.src}></MarqueeItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
