import  '../ToCardCourse/ToCardCourse.css'
import img1 from "../FeaturedCourses/img/img1.jpg";
import img2 from "../FeaturedCourses/img/img2.jpg";
import img3 from "../FeaturedCourses/img/img3.jpg";
import img4 from "../FeaturedCourses/img/img4.jpg";
import img5 from "../FeaturedCourses/img/img5.jpg";
import img6 from "../FeaturedCourses/img/img6.jpg";
import CardFeaturedCourses from '../CardFeaturedCourses/CardFeaturedCourses';
function ToCardCourse() {
  return (
    <div className='ko-ToCardCourse'>
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
            <CardFeaturedCourses img={img1}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <CardFeaturedCourses img={img2}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <CardFeaturedCourses img={img3}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <CardFeaturedCourses img={img4}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <CardFeaturedCourses img={img5}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <CardFeaturedCourses img={img6}/>
            </div>
        </div>
    </div>
  )
}

export default ToCardCourse