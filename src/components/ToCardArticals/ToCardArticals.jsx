import ArticalsCard from '../ArticalsCard/ArticalsCard'
import './ToCardArticals.css'
import img1 from "../LatestArticles/img/img1.jpg"
import img2 from "../LatestArticles/img/img2.png"
import img3 from "../LatestArticles/img/img3.png"


function ToCardArticals() {
  return (
    <div className='ko-ToCardCourse'>
    <div className="row g-4">
        <div className="col-lg-6 col-md-12 col-sm-12">
        <ArticalsCard img={img1}/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <ArticalsCard img={img2}/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <ArticalsCard img={img3}/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <ArticalsCard img={img2}/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <ArticalsCard img={img1}/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <ArticalsCard img={img3}/>
        </div>
    </div>
</div>
  )
}

export default ToCardArticals