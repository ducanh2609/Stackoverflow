import FooterItem from "./FooterItem";

export default function FooterList(props) {
  return (
    <div className={props.class}>
      <h5>{props.content}</h5>
      {props.fn.map((item, index) => (
        <FooterItem key={index} content={item}></FooterItem>
      ))}
    </div>
  );
}
