import ArticalsCatgory from '../../components/ArticalsCatgory/ArticalsCatgory'
import BlogSingle from '../../components/BlogSingle/BlogSingle'
import  './BlogSinglePage.css'

function BlogSinglePage() {
  return (
    <div className="ko-AllCourse">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-9 col-md-12 col-sm-12 mb-4">
          <BlogSingle />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12">
          <ArticalsCatgory />
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogSinglePage