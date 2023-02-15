export default function MarqueeItem(props) {
  return (
    <img
      src={props.src}
      className="marqueelogo"
      style={{ width: "auto", maxWidth: "none" }}
      alt=""
    />
  );
}
