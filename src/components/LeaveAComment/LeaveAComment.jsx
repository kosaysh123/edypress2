import "../LeaveAComment/LeaveAComment.css";

export default function LeaveAComment() {
  return (
    <div className="ko-LeaveAComment">
      <div className="container ko-LeaveAComment-container">
        <div className="ko-top-heading">
          <h4 className="ko-top-heading-h4">Leave a comment</h4>
          <p className="ko-top-heading-p">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div className="ko-form-comment">
          <div className="ko-form-said1">
            <input type="text" placeholder="Name*" className="ko-form-said1-text" />
            <input type="email" placeholder="Email*" className="ko-form-said1-email"/>
          </div>
          <textarea name="" id="" cols="30" rows="5" className="ko-comment-textarea" placeholder="Comment"></textarea>
          <div className="ko-form-check">
            <input type="checkbox" name="" id="" className="ko-form-check-checkbox"/>
            <p className="ko-form-check-p">
              Save my name, email in this brower for the next time I comment
            </p>
          </div>
          <div className="ko-buttom">
                    <a href="#" className="ko-buttom-a">Posts comment</a>
                </div>
        </div>
      </div>
    </div>
  );
}
