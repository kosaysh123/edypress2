
import "../CardFeaturedCourses/CardFeaturedCourses.css";
export default function CardFeaturedCourses(props) {

        return (
            
        <div className="ka-card1 ">
        <div className="ka-card1-photo position-relative ">
          <img src={props.img} alt="" className="ka-card1-photo-img" />
          <div className="ka-card1-phtp-text position-absolute ">
            <a className="ka-card1-phtp-text-a" href="">
              Photography
            </a>
          </div>
        </div>
        <div className="ka-card1-contaent">
          <div className="ka-card1-contaent-1">
            <div>
              <span className="ka-card1-contaent-1-p1">by </span>
              <span className="ka-card1-contaent-1-p2 "> Determined-Poitras</span>
            </div>
  
            <h4 className="ka-card1-contaent-1-h4">
              Create an LMS Website with LearnPress
              {/* {data1} */}
            </h4>
          </div>
  
          <div className="ka-card1-contaent-2">
            <div className="left d-flex align-items-center">
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
              <p className="ka-card1-contaent-2-p">2Weeks</p>
            </div>
            <div className="rigth d-flex align-items-center">
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
              <p className=" ka-card1-contaent-2-p2">156 Students</p>
            </div>
          </div>
          <div className="ka-card1-contaent-2-hr" />
          <div className="ka-card1-contaent-3">
            <div className="ka-card1-contaent-3-div-1">
              <p className="ka-card1-contaent-3-p">$29.0</p>
              <a className="ka-card1-contaent-3-a-1" href="">
                Free
              </a>
            </div>
            <a className="ka-card1-contaent-3-a-2" href="">
              View more
            </a>
          </div>
        </div>
      </div>
      );
    }


