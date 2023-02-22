import { useDispatch, useSelector } from "react-redux";
import { hpActiveSlice } from "../reducers/activeSlice";
import { getActive } from "../redux/selector";

function Typetech(props) {
  let dispatch = useDispatch();
  const hpActive = useSelector(getActive).hpActive;
  console.log(hpActive);
  function pick() {
    if (props.index === hpActive)
      dispatch(hpActiveSlice.actions.hpActive(null));
    else dispatch(hpActiveSlice.actions.hpActive(props.index));
  }
  return (
    <>
      <div
        onClick={pick}
        className={
          props.index === hpActive
            ? "hp-flex-item-4a hp-active"
            : "hp-flex-item-4a"
        }
      >
        {props.element}
        <h3 className="hp-flex-item4-h3">{props.h3}</h3>
        <p className="hp-flex-item4-p">{props.p}</p>
      </div>
    </>
  );
}

export default Typetech;
