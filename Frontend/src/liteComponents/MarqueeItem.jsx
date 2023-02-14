export default function MarqueeItem(props) {
  return (
    <img
      src={props.src}
      class="marqueelogo"
      style={{ width: "auto", maxWidth: "none" }}
      alt=""
    />
  );
}
