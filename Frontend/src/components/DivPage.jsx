import { Link, useParams } from "react-router-dom";

export default function DivPage(props) {
  let params = useParams();
  let previos = "";
  if (+props.currentPage === 1) {
    previos = `/questions/${props.status}/${props.currentPage}`;
  } else {
    previos = `/questions/${props.status}/${props.currentPage - 1}`;
  }

  let next = "";
  if (+props.currentPage === props.divPage.length) {
    next = `/questions/${props.status}/${props.currentPage}`;
  } else {
    next = `/questions/${props.status}/${+props.currentPage + 1}`;
  }
  return (
    <div className="div-page">
      <Link to={previos} className="previos" id="previos" disabled>
        <i className="fa-sharp fa-solid fa-backward"></i>
      </Link>
      <div className="page-id" id="pageId">
        {props.divPage.map((item, index) => (
          <Link
            to={`/questions/${props.status}/${item.number}`}
            key={index}
            href="/"
            className={+params.title === index + 1 ? "order active" : "order"}
          >
            <span>{item.number}</span>
          </Link>
        ))}
      </div>
      <Link to={next} className="next">
        <i className="fa-sharp fa-solid fa-forward"></i>
      </Link>
    </div>
  );
}
