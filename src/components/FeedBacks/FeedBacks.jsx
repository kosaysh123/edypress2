import { useState } from "react";
import "../FeedBacks/FeedBacks.css";
function FeedBacks() {
  const [Text , SetText]= useState("I must explain to you how all this mistaken . Tdea of denouncingpleasure and praising pain was born and I will give you a completeaccount of the system and expound")
  return (
    <div className="ko-FeedBacks">
      <div className="container">
        <div className="ko-main-heading-feedbacks text-center ">
          <h2 className="ko-main-heading-feedbacks-h2">Student feedbacks</h2>
          <p className="ko-main-heading-feedbacks-p">
            What Students Say About Academy LMS
          </p>
        </div>
        <div className="ko-feedbacks-main-boxs">
        <div className="row ko-feedbacks-gap">
        <div className="ko-feedbacks-card col-lg-2 col-md-6 col-sm-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              className="ko-feedbacks-svg"
            >
              <path
                d="M24.5 29.8L35.5 2.3L29.9 0L16.6 26.7L24.5 29.8ZM7.9 29.8L18.9 2.3L13.3 0L0 26.7L7.9 29.8Z"
                fill="#E0E0E0"
              />
            </svg>
            <p className="ko-feedbacks-p1">{Text}
            </p>
            <h4 className="ko-feedbacks-h4">Roe Smith</h4>
            <p className="ko-feedbacks-p2">Designer</p>
          </div>
        <div className="ko-feedbacks-card col-lg-2 col-md-6 col-sm-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              className="ko-feedbacks-svg"
            >
              <path
                d="M24.5 29.8L35.5 2.3L29.9 0L16.6 26.7L24.5 29.8ZM7.9 29.8L18.9 2.3L13.3 0L0 26.7L7.9 29.8Z"
                fill="#E0E0E0"
              />
            </svg>
            <p className="ko-feedbacks-p1">
              I must explain to you how all this mistaken . Tdea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound
            </p>
            <h4 className="ko-feedbacks-h4">Roe Smith</h4>
            <p className="ko-feedbacks-p2">Designer</p>
          </div>
        <div className="ko-feedbacks-card col-lg-2 col-md-6 col-sm-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              className="ko-feedbacks-svg"
            >
              <path
                d="M24.5 29.8L35.5 2.3L29.9 0L16.6 26.7L24.5 29.8ZM7.9 29.8L18.9 2.3L13.3 0L0 26.7L7.9 29.8Z"
                fill="#E0E0E0"
              />
            </svg>
            <p className="ko-feedbacks-p1">
              I must explain to you how all this mistaken . Tdea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound
            </p>
            <h4 className="ko-feedbacks-h4">Roe Smith</h4>
            <p className="ko-feedbacks-p2">Designer</p>
          </div>
        <div className="ko-feedbacks-card col-lg-2 col-md-6 col-sm-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              className="ko-feedbacks-svg"
            >
              <path
                d="M24.5 29.8L35.5 2.3L29.9 0L16.6 26.7L24.5 29.8ZM7.9 29.8L18.9 2.3L13.3 0L0 26.7L7.9 29.8Z"
                fill="#E0E0E0"
              />
            </svg>
            <p className="ko-feedbacks-p1">
              I must explain to you how all this mistaken . Tdea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound
            </p>
            <h4 className="ko-feedbacks-h4">Roe Smith</h4>
            <p className="ko-feedbacks-p2">Designer</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default FeedBacks;
