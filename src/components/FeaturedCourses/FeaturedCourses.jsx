import CardFeaturedCourses from "../CardFeaturedCourses/CardFeaturedCourses";
import "../FeaturedCourses/FeaturedCourses.css";
import img1 from "../FeaturedCourses/img/img1.jpg";
import img2 from "../FeaturedCourses/img/img2.jpg";
import img3 from "../FeaturedCourses/img/img3.jpg";
import img4 from "../FeaturedCourses/img/img4.jpg";
import img5 from "../FeaturedCourses/img/img5.jpg";
import img6 from "../FeaturedCourses/img/img6.jpg";
function FeaturedCourses() {

  return (
    <div className="all">
            <div className="container col-x">
            <div className="ko-head-main-page">
            <div className="ko-text-head-main-page">
              <h2 className="ko-text-head-main-page-h2">Featured courses</h2>
              <p className="ko-text-head-main-page-p"> Explore our Popular Courses</p>
            </div>
            <div className="ko-button-head-main">
              <a href="#" className="ko-button-head-main-a">All Courses</a>
            </div>
          </div>
              <div className="row g-4 ">
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12">
                <CardFeaturedCourses img={img1}/>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12">
                <CardFeaturedCourses img={img2}/>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12">
                <CardFeaturedCourses img={img3}/>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12">
                <CardFeaturedCourses img={img4}/>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12">
                <CardFeaturedCourses img={img5}/>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-10 col-sm-12">
                <CardFeaturedCourses img={img6}/>
                </div>
              </div>
            </div>

    </div>
  );
}

export default FeaturedCourses;
