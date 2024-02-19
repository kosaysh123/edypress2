import CoursSingle from "../../components/CoursSingle/CoursSingle";
import CourseCategory from "../../components/CourseCategory/CourseCategory";
import HeadAllCourses from "../../components/HeadAllCourses/HeadAllCourses";
import "../AllCourse/AllCourse.css";

function AllCourse() {
  return (
    <div className="ko-AllCourse">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-9 col-md-12 col-sm-12 mb-4">
            <HeadAllCourses />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <CourseCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourse;
