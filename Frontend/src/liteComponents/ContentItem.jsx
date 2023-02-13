export default function ContentItem(props) {
  return (
    <div className="content-item">
      <div className="content-item-left">
        <p>
          <span>69</span> votes
        </p>
        <p>
          <span>0</span> answers
        </p>
        <p>
          <span>9</span>k views
        </p>
      </div>
      <div className="content-item-right">
        <div className="question-title">
          E/libEGL: validate_display:99 error 3008 (EGL_BAD_DISPLAY) android os
          7.1 nougat
        </div>
        <div className="answers-title">
          I am getting the following error while running my app on Android OS
          7.1 Nougat. E/libEGL: validate_display:99 error 3008
          (EGL_BAD_DISPLAY)[ 04-21 10:19:18.788 4410: 4622 D/ ] ...
        </div>
        <div className="question-tags">Nhiều quá mệt rồi bỏ qua</div>
      </div>
    </div>
  );
}
