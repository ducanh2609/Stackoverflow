import FooterItem from "./FooterItem";

export default function FooterList(props) {
  return (
    <div className={props.class}>
      <h5 className="da-10">{props.content}</h5>
      <div>
        {props.fn.map((item, index) => (
          <FooterItem key={index} content={item}></FooterItem>
        ))}
      </div>
    </div>
  );
}
