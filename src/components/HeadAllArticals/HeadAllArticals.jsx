import { useState } from 'react';
import '../HeadAllArticals/HeadAllArticals.css'
import ToCardArticals from '../ToCardArticals/ToCardArticals';
import ToCardLineArticals from '../ToCardLineArticals/ToCardLineArticals';

function HeadAllArticals() {
  const [show1, setShow1] = useState(false);
  return (
    <>
      
    <div className="ko-HeadAllCourses mb-5">
      <h1 className="ko-HeadAllCourses-h1">All Article</h1>
      <div className="ko-left-contant">
        <div className="ko-search position-relative ">
          <input
            type="text"
            name=""
            id=""
            className="ko-search-input  "
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="position-absolute ko-search-svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.16699 3.33341C5.94533 3.33341 3.33366 5.94509 3.33366 9.16675C3.33366 12.3884 5.94533 15.0001 9.16699 15.0001C12.3887 15.0001 15.0003 12.3884 15.0003 9.16675C15.0003 5.94509 12.3887 3.33341 9.16699 3.33341ZM1.66699 9.16675C1.66699 5.02461 5.02486 1.66675 9.16699 1.66675C13.3091 1.66675 16.667 5.02461 16.667 9.16675C16.667 13.3089 13.3091 16.6667 9.16699 16.6667C5.02486 16.6667 1.66699 13.3089 1.66699 9.16675Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.2861 13.2858C13.6115 12.9604 14.1391 12.9604 14.4646 13.2858L18.0896 16.9108C18.415 17.2363 18.415 17.7639 18.0896 18.0893C17.7641 18.4148 17.2365 18.4148 16.9111 18.0893L13.2861 14.4643C12.9606 14.1389 12.9606 13.6113 13.2861 13.2858Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="ko-choce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ko-choce-card"
            onClick={() => setShow1(!show1)}
           
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 0.5V7.16667H7.16667V0.5H0.5ZM0.5 8.83333V15.5H7.16667V8.83333H0.5ZM8.83333 0.5V7.16667H15.5V0.5H8.83333ZM8.83333 8.83333V15.5H15.5V8.83333H8.83333Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="ko-choce-card-line"
            onClick={() => setShow1(!show1)}
          
          >
            <g clip-path="url(#clip0_593_3293)">
              <path
                d="M2.29199 11.0417H4.58366V8.75008H2.29199V11.0417ZM2.29199 15.0001H4.58366V12.7084H2.29199V15.0001ZM2.29199 7.08341H4.58366V4.79175H2.29199V7.08341ZM6.25033 11.0417H17.7087V8.75008H6.25033V11.0417ZM6.25033 15.0001H17.7087V12.7084H6.25033V15.0001ZM6.25033 4.79175V7.08341H17.7087V4.79175H6.25033Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_593_3293">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div className="ko-all-course">
    {show1 ? <ToCardArticals/> || !show1  :  <ToCardLineArticals/>  }
        
      </div>
  </>
  )
}

export default HeadAllArticals