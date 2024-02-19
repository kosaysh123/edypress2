import ArticalsCardLine from "../ArticalsCardLine/ArticalsCardLine"
import "./ToCardLineArticals.css"
import img1 from "../LatestArticles/img/img1.jpg"
import img2 from "../LatestArticles/img/img2.png"
import img3 from "../LatestArticles/img/img3.png"
function ToCardLineArticals() {
  return (
    <div className='ko-ToCardLineCourse'>
    <div className="row g-4 ">
<div className="col-lg-12 col-md-12 col-sm-12">
<ArticalsCardLine img={img1}/>
</div>
<div className="col-lg-12 col-md-12 col-sm-12">
<ArticalsCardLine img={img3}/>
</div>
<div className="col-lg-12 col-md-12 col-sm-12">
<ArticalsCardLine img={img2}/>
</div>
<div className="col-lg-12 col-md-12 col-sm-12">
<ArticalsCardLine img={img1}/>
</div>
<div className="col-lg-12 col-md-12 col-sm-12">
<ArticalsCardLine img={img3}/>
</div>
<div className="col-lg-12 col-md-12 col-sm-12">
<ArticalsCardLine img={img2}/>
</div>
</div>
</div>
  )
}

export default ToCardLineArticals