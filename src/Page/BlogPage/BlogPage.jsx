import ArticalsCatgory from '../../components/ArticalsCatgory/ArticalsCatgory';
import HeadAllArticals from '../../components/HeadAllArticals/HeadAllArticals';
import  '../BlogPage/BlogPage.css'

function BlogPage() {
  return (
    <div className="ko-AllCourse">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-9 col-md-12 col-sm-12 mb-4">
            <HeadAllArticals />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <ArticalsCatgory />
          </div>
        </div>
      </div>
    </div>
);
}

export default BlogPage