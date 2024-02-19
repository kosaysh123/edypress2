import "../ArticalsCatgory/ArticalsCatgory.css";
import img1 from "../LatestArticles/img/img1.jpg";
import img2 from "../LatestArticles/img/img2.png";
import img3 from "../LatestArticles/img/img3.png";
function ArticalsCatgory() {
  return (
    <div className="ko-main-CourseCategory ">
      <h4 className="ko-CourseCategory-h4 mt-3">Course category</h4>
      <div className="ko-CourseCategory-checkbox">
        <div className="ko-CourseCategory-checkbox-line">
          <div className="ko-CourseCategory-checkbox-line-info">
            <input
              type="checkbox"
              name=""
              id=""
              className="ko-CourseCategory-checkbox-line-info-ch"
              checked
            />
            <p className="ko-CourseCategory-checkbox-line-info-p">Commercial</p>
          </div>
          <p className="ko-CourseCategory-checkbox-line-p">15</p>
        </div>
        <div className="ko-CourseCategory-checkbox-line">
          <div className="ko-CourseCategory-checkbox-line-info">
            <input
              type="checkbox"
              name=""
              id=""
              className="ko-CourseCategory-checkbox-line-info-ch"
              checked
            />
            <p className="ko-CourseCategory-checkbox-line-info-p">Shop</p>
          </div>
          <p className="ko-CourseCategory-checkbox-line-p">15</p>
        </div>
        <div className="ko-CourseCategory-checkbox-line">
          <div className="ko-CourseCategory-checkbox-line-info">
            <input
              type="checkbox"
              name=""
              id=""
              className="ko-CourseCategory-checkbox-line-info-ch"
            />
            <p className="ko-CourseCategory-checkbox-line-info-p">Education</p>
          </div>
          <p className="ko-CourseCategory-checkbox-line-p">15</p>
        </div>
        <div className="ko-CourseCategory-checkbox-line">
          <div className="ko-CourseCategory-checkbox-line-info">
            <input
              type="checkbox"
              name=""
              id=""
              className="ko-CourseCategory-checkbox-line-info-ch"
            />
            <p className="ko-CourseCategory-checkbox-line-info-p">Office</p>
          </div>
          <p className="ko-CourseCategory-checkbox-line-p">15</p>
        </div>
        <div className="ko-CourseCategory-checkbox-line">
          <div className="ko-CourseCategory-checkbox-line-info">
            <input
              type="checkbox"
              name=""
              id=""
              className="ko-CourseCategory-checkbox-line-info-ch"
              checked
            />
            <p className="ko-CourseCategory-checkbox-line-info-p">Academy</p>
          </div>
          <p className="ko-CourseCategory-checkbox-line-p">15</p>
        </div>
        <div className="ko-CourseCategory-checkbox-line">
          <div className="ko-CourseCategory-checkbox-line-info">
            <input
              type="checkbox"
              name=""
              id=""
              className="ko-CourseCategory-checkbox-line-info-ch"
            />
            <p className="ko-CourseCategory-checkbox-line-info-p">Commercial</p>
          </div>
          <p className="ko-CourseCategory-checkbox-line-p">15</p>
        </div>
        <div className="ko-CourseCategory-checkbox-line">
          <div className="ko-CourseCategory-checkbox-line-info">
            <input
              type="checkbox"
              name=""
              id=""
              className="ko-CourseCategory-checkbox-line-info-ch"
            />
            <p className="ko-CourseCategory-checkbox-line-info-p">Univarcity</p>
          </div>
          <p className="ko-CourseCategory-checkbox-line-p">15</p>
        </div>
      </div>
      <div className="ko-Recent-posts g-2 mt-4 mb-4 ">
        <h4 className="ko-Recent-posts-h4">Recent posts</h4>
        <div className="ko-main-recent-posts  ">
          <div className="ko-box">
            <img src={img1} alt="" className="ko-box-img" />
            <p className="ko-box-p">Best LearnPress WordPress Theme Collection for 2023</p>
          </div>
          <div className="ko-box">
            <img src={img2} alt="" className="ko-box-img" />
            <p className="ko-box-p">Best LearnPress WordPress Theme Collection for 2023</p>
          </div>
          <div className="ko-box">
            <img src={img3} alt="" className="ko-box-img" />
            <p className="ko-box-p">Best LearnPress WordPress Theme Collection for 2023</p>
          </div>
        </div>
      </div>
      <div className="ko-tags mt-4 mb-4 ">
      <h4 className="ko-Recent-posts-h4">Tags</h4>
      <div className="ko-main-tags d-flex ">
        <div className="ko-tag">
            <p className="ko-tag-p mb-0">Free couses</p>
        </div>
        <div className="ko-tag">
            <p className="ko-tag-p mb-0">Marketing</p>
        </div>
        <div className="ko-tag">
            <p className="ko-tag-p mb-0">Instructor</p>
        </div>
        <div className="ko-tag">
            <p className="ko-tag-p mb-0">LMS</p>
        </div>
        <div className="ko-tag">
            <p className="ko-tag-p mb-0">Idea</p>
        </div>
        <div className="ko-tag">
            <p className="ko-tag-p mb-0">LearnPress</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ArticalsCatgory;
