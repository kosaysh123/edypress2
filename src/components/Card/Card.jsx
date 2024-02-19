import '../Card/Card.css'

function Card() {
  return (
    <div className='ko-AllCards'>
        <div className="container text-center">
  <div className="row">
    <div className="box col-lg-2 col-md-5 col-sm-12">
      <h2 className='ko-box-h2'>
      25K+
      </h2>
      <a href="#" className='ko-box-a'>
      Active Students
      </a>
    </div>
    <div className="box col-lg-2 col-md-5 col-sm-12">
      <h2 className='ko-box-h2'>
      899
      </h2>
      <a href="#" className='ko-box-a'>
      Total Courses
      </a>
    </div>
    <div className="box col-lg-2 col-md-5 col-sm-12">
      <h2 className='ko-box-h2'>
      158
      </h2>
      <a href="#" className='ko-box-a'>
      Instructor
      </a>
    </div>
    <div className="box col-lg-2 col-md-5 col-sm-12">
      <h2 className='ko-box-h2'>
      100%
      </h2>
      <a href="#" className='ko-box-a'>
      Satisfaction rate
      </a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card