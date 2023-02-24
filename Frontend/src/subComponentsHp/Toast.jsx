import { useEffect, useState } from "react";
import "../css/toast.css";
export default function Toast(props) {
  let status = {
    title: "",
    description: "",
    icon: "",
    style: {},
  };
  const [style, setStyle] = useState({ display: "none" });
  const [currentStatus, setcurrentStatus] = useState(status);
  useEffect(() => {
    if (props.toastArray.status) {
      props.toastArray.status === "Error"
        ? setcurrentStatus({
            title: "Error",
            description: props.toastArray.message,
            icon: <i className="fa-solid fa-circle-exclamation"></i>,
            style: { backgroundColor: "rgb(207, 39, 39)" },
          })
        : setcurrentStatus({
            title: "Success",
            description: props.toastArray.message,
            icon: <i className="fa-solid fa-circle-check"></i>,
            style: { backgroundColor: "rgb(25, 164, 41)" },
          });
      setStyle({ display: "block" });
      setTimeout(() => {
        setStyle({ display: "none" });
      }, 4000);
    }
  }, [props]);
  function closeToast() {
    setStyle({ display: "none" });
  }
  return (
    <div style={style}>
      <div
        className="notification-container top-right"
        style={currentStatus.style}
      >
        <div className="notification-property">
          <div className="notification-img">{currentStatus.icon}</div>
          <div>
            <div className="notification-text">
              <p className="notification-title">{props.toastArray.status}</p>
              <p className="notification-message">{props.toastArray.message}</p>
            </div>
          </div>
          <button onClick={closeToast} className="notification-btn">
            X
          </button>
        </div>
      </div>
    </div>
  );
}
