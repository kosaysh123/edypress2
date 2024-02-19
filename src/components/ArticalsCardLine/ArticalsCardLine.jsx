import "./ArticalsCardLine.css";
import img1 from "../LatestArticles/img/img2.png";
function ArticalsCardLine(props) {
  return (
    <div className="ko-card1 ">
      <div className="ko-card1-photo position-relative ">
        <img src={props.img} alt="" className="ko-card1-photo-img" />
        <div className="ko-card1-phtp-text position-absolute ">
          <a className="ko-card1-phtp-text-a" href="">
            Photography
          </a>
        </div>
      </div>
      <div className="ko-card1-contaent">
        <div className="ko-card1-contaent-1">
          <div>
            <span className="ko-card1-contaent-1-p1">by </span>
            <span className="ko-card1-contaent-1-p2 "> Determined-Poitras</span>
          </div>

          <h4 className="ko-card1-contaent-1-h4">
            Create an LMS Website with LearnPress Website with LearnPress
            {/* {data1} */}
          </h4>
        </div>

        <div className="ko-card1-contaent-2">
          <div className="info1 d-flex align-items-center g-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              className="ko-time-blog-img"
            >
              <g clip-path="url(#clip0_336_2687)">
                <path
                  d="M13.333 2.79989H12.6663V1.46655H11.333V2.79989H4.66634V1.46655H3.33301V2.79989H2.66634C1.93301 2.79989 1.33301 3.39989 1.33301 4.13322V14.7999C1.33301 15.5332 1.93301 16.1332 2.66634 16.1332H13.333C14.0663 16.1332 14.6663 15.5332 14.6663 14.7999V4.13322C14.6663 3.39989 14.0663 2.79989 13.333 2.79989ZM13.333 14.7999H2.66634V6.13322H13.333V14.7999Z"
                  fill="#FF782D"
                />
              </g>
              <defs>
                <clipPath id="clip0_336_2687">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.799805)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="ko-time-blog-p">Jan 24, 22023</p>
          </div>
        </div>
        <div className="ko-card1-contaent-2-hr" />
        <div className="ko-card1-contaent-3">
          <div className="ko-card1-contaent-3-div-1">
            <p className="ko-card1-contaent-3-p">$29.0</p>
            <a className="ko-card1-contaent-3-a-1" href="">
              Free
            </a>
          </div>
          <a className="ko-card1-contaent-3-a-2" href="">
            View more
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArticalsCardLine;
