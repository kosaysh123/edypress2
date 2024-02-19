import "../CardLineFeaturedCourses/CardLineFeaturedCourses.css";
import img1 from "../FeaturedCourses/img/img1.jpg";

function CardLineFeaturedCourses(props) {
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
          <div className="info1 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M6.99967 0.333374C3.33301 0.333374 0.333008 3.33337 0.333008 7.00004C0.333008 10.6667 3.33301 13.6667 6.99967 13.6667C10.6663 13.6667 13.6663 10.6667 13.6663 7.00004C13.6663 3.33337 10.6663 0.333374 6.99967 0.333374ZM9.79967 9.80004L6.33301 7.66671V3.66671H7.33301V7.13337L10.333 8.93337L9.79967 9.80004Z"
                fill="#FF782D"
              />
            </svg>
            <p className="ko-card1-contaent-2-p">2Weeks</p>
          </div>
          <div className="info2 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_568_2029)">
                <path
                  d="M3.33366 8.78667V11.4533L8.00033 14L12.667 11.4533V8.78667L8.00033 11.3333L3.33366 8.78667ZM8.00033 2L0.666992 6L8.00033 10L14.0003 6.72667V11.3333H15.3337V6L8.00033 2Z"
                  fill="#FF782D"
                />
              </g>
              <defs>
                <clipPath id="clip0_568_2029">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className=" ko-card1-contaent-2-p2">156 Students</p>
          </div>
          <div className="info3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_583_1202)">
                <path
                  d="M13 -1H17V17H13V-1ZM-1 9H3V17H-1V9ZM6 4H10V17H6V4Z"
                  fill="#FF782D"
                />
              </g>
              <defs>
                <clipPath id="clip0_583_1202">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className=" ko-card1-contaent-2-p2">All levels</p>
          </div>
          <div className="info4 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_583_1209)">
                <path
                  d="M10.6663 0.666748H2.66634C1.93301 0.666748 1.33301 1.26675 1.33301 2.00008V11.3334H2.66634V2.00008H10.6663V0.666748ZM9.99967 3.33341L13.9997 7.33341V14.0001C13.9997 14.7334 13.3997 15.3334 12.6663 15.3334H5.32634C4.59301 15.3334 3.99967 14.7334 3.99967 14.0001L4.00634 4.66675C4.00634 3.93341 4.59967 3.33341 5.33301 3.33341H9.99967ZM9.33301 8.00008H12.9997L9.33301 4.33341V8.00008Z"
                  fill="#FF782D"
                />
              </g>
              <defs>
                <clipPath id="clip0_583_1209">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className=" ko-card1-contaent-2-p2">20 Lessons</p>
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

export default CardLineFeaturedCourses;
