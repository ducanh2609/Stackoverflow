import "../css/loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner-frame">
        <div className="spinner-cover"></div>
        <div className="spinner-bar"></div>
      </div>
    </div>
  );
}
