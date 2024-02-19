import { Link, NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";
import LoginRegister from "../LoginRegister/LoginRegister";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container">
          <a className="navbar-brand me-5 d-flex " href="#">
            <svg
              // style="width: 2.45631rem; height: 1.875rem;"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1091)">
                <path
                  d="M16.8234 29.4566C11.3396 27.4703 5.70868 26.8828 0 26.5024V1.37451C0.177608 1.57104 0.299517 1.69084 0.40461 1.82431C1.46185 3.16005 2.52855 4.48738 3.55742 5.84309C3.75709 6.10582 3.90422 6.48311 3.90528 6.8089C3.92629 11.7178 3.92629 16.6267 3.90423 21.5357C3.90107 22.1284 3.98935 22.3838 4.67666 22.4584C7.96084 22.8199 11.2313 23.2792 14.361 24.4236C14.7593 24.5697 14.9716 24.7883 15.1209 25.1761C15.6558 26.5759 16.2254 27.9621 16.8234 29.4566Z"
                  fill="#FF782D"
                />
                <path
                  d="M39.3012 1.36401V26.5024C33.6114 26.8849 27.9837 27.4598 22.5293 29.4471C22.586 29.2569 22.6218 29.0919 22.6838 28.9385C23.1882 27.6742 23.7105 26.4173 24.1982 25.1467C24.339 24.7789 24.545 24.5718 24.9181 24.4341C27.4918 23.4894 30.1706 23.0269 32.8716 22.6602C33.5063 22.574 34.1421 22.4584 34.7801 22.4363C35.2908 22.4195 35.3969 22.2146 35.3959 21.7427C35.3801 16.8327 35.3927 11.9238 35.377 7.01384C35.3749 6.50414 35.4989 6.10373 35.8247 5.70648C36.863 4.43485 37.8666 3.13274 38.8861 1.84429C38.9943 1.70662 39.1141 1.57946 39.3012 1.36401Z"
                  fill="#FF782D"
                />
                <path
                  d="M17.4918 16.8643C17.4834 17.7503 17.9269 18.3682 18.6972 18.7928C18.8832 18.8948 19.1165 19.1365 19.1176 19.3151C19.1418 22.7811 19.1355 26.2471 19.1323 29.7131C19.1323 29.7625 19.1029 29.8129 19.043 30C18.5816 28.8587 18.1633 27.834 17.7535 26.8062C16.2832 23.129 14.8098 19.4517 13.3585 15.7661C13.2534 15.4971 13.2334 15.1387 13.3112 14.8613C13.7736 13.225 14.2633 11.5971 14.7751 9.97546C14.8991 9.58451 14.8287 9.37223 14.4945 9.13051C11.8462 7.21465 8.88463 5.99347 5.76125 5.11173C5.46174 5.02766 5.14751 4.81957 4.94993 4.57891C3.90845 3.30938 2.90166 2.01147 1.88435 0.721977C1.73827 0.537012 1.60165 0.344691 1.40723 0.0830078C6.42334 0.360455 10.914 1.90743 15.0305 4.56104C16.2748 5.36291 17.4624 6.25305 18.6825 7.09275C19.0041 7.31449 19.1512 7.56882 19.146 7.98604C19.1228 10.089 19.1281 12.1929 19.1428 14.2969C19.146 14.6584 19.0671 14.8571 18.6993 15.0168C17.9174 15.3563 17.5002 16.0047 17.4918 16.8643Z"
                  fill="#FF782D"
                />
                <path
                  d="M37.8696 0.137673C37.7036 0.353114 37.5386 0.569607 37.3705 0.783998C36.3658 2.05878 35.3716 3.34197 34.3448 4.59889C34.1588 4.8259 33.8635 5.02347 33.5808 5.10229C30.4732 5.97142 27.5326 7.19155 24.8843 9.06852C24.4923 9.34597 24.4019 9.59084 24.5522 10.0564C25.0693 11.6559 25.539 13.2702 26.0046 14.8844C26.0708 15.1146 26.0929 15.4099 26.0077 15.6253C24.1413 20.3314 22.257 25.0301 20.3747 29.7299C20.3548 29.7814 20.3148 29.8266 20.2308 29.959C20.2003 29.7572 20.1677 29.6374 20.1677 29.5176C20.1645 26.1704 20.1708 22.8232 20.1582 19.477C20.1561 19.1092 20.2518 18.921 20.6112 18.7613C21.3878 18.4145 21.8061 17.7692 21.8135 16.9074C21.8198 16.0173 21.391 15.3636 20.5891 15.0074C20.2539 14.8581 20.1561 14.6858 20.1582 14.34C20.1719 12.1961 20.1572 10.0511 20.1782 7.90724C20.1803 7.68234 20.2907 7.37652 20.4578 7.2462C24.3515 4.22056 28.5237 1.72669 33.421 0.698872C34.864 0.395152 36.3363 0.229104 37.795 0C37.8192 0.0462412 37.8444 0.0914314 37.8696 0.137673Z"
                  fill="#FF782D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1091">
                  <rect width="39.3008" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h5 class="KA-NavBar-logo-text">EduPress</h5>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "Nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/CoursePage"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "Nav-link"
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/BlogPage"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "Nav-link"
                  }
                >
                  Blog
                </NavLink>
                {/* <a className="nav-link " href="#">
                  Blog
                </a> */}
              </li>
              <li className="nav-item dropdown">
                {/* <a
                  className="nav-link dropdown-toggle nav-dropdown "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Page
                </a> */}
                <NavLink
                  to=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "Nav-link  dropdown-toggle" : "Nav-link  dropdown-toggle"
                  }
                >
                  Page
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/FAQsPage"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "Nav-link"
                      }
                    >
                      FAQs
                    </NavLink>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <NavLink
                      to="/Contact"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "Nav-link"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/CourseSinglePage"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "Nav-link"
                  }
                >
                  LearnPress Add-On
                </NavLink>
                {/* <a className="nav-link " href="#">
                  LearnPress Add-On
                </a> */}
              </li>
              <li className="nav-item">
                <NavLink
                  to="/BlogSinglePage"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "Nav-link"
                  }
                >
                  BlogSinglePage
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="KA-NavBar-serch">
              <div className="KA-NavBar-serch-page-login">
                <Link to="/LoginRegister" className="KA-NavBar-serch-Register">Login /</Link>
                {/* <a class="KA-NavBar-serch-Register" href="#">
                  Register
                </a> */}
                <Link to="/LoginRegister" className="KA-NavBar-serch-Register">Register</Link>
              </div>
              <div class="KA-NavBar-serch-div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.16699 3.33341C5.94533 3.33341 3.33366 5.94509 3.33366 9.16675C3.33366 12.3884 5.94533 15.0001 9.16699 15.0001C12.3887 15.0001 15.0003 12.3884 15.0003 9.16675C15.0003 5.94509 12.3887 3.33341 9.16699 3.33341ZM1.66699 9.16675C1.66699 5.02461 5.02486 1.66675 9.16699 1.66675C13.3091 1.66675 16.667 5.02461 16.667 9.16675C16.667 13.3089 13.3091 16.6667 9.16699 16.6667C5.02486 16.6667 1.66699 13.3089 1.66699 9.16675Z"
                    fill="#FF782D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2861 13.2858C13.6115 12.9604 14.1391 12.9604 14.4646 13.2858L18.0896 16.9108C18.415 17.2363 18.415 17.7639 18.0896 18.0893C17.7641 18.4148 17.2365 18.4148 16.9111 18.0893L13.2861 14.4643C12.9606 14.1389 12.9606 13.6113 13.2861 13.2858Z"
                    fill="#FF782D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
