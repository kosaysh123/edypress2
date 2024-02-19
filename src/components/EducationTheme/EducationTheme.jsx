import '../EducationTheme/EducationTheme.css'
import img1 from '../EducationTheme/img/img 1.png'
import img2 from '../EducationTheme/img/img 2.png'
import img3 from '../EducationTheme/img/img 3.png'
import img4 from '../EducationTheme/img/img 4.png'
import img5 from '../EducationTheme/img/img 5.png'
import img6 from '../EducationTheme/img/img 6.png'

function EducationTheme() {
  return (
    <div className='ko-EducationTheme'>
      <div className="container ">
        <div className="ko-main-text-center position-relative">
                <div className="ko-left-contant position-absolute">
            <img src={img1} alt="img 1" className='ko-left-contant-img1' />
            <img src={img2} alt="img 2" className='ko-left-contant-img2' />
            <img src={img3} alt="img 3" className='ko-left-contant-img3' />
        </div>
                    <div className="ko-rigth-contant position-absolute">
                    <img src={img4} alt="img 4" className='ko-rigth-contant-img4' />
            <img src={img5} alt="img 5" className='ko-rigth-contant-img5' />
            <img src={img6} alt="img 6" className='ko-rigth-contant-img6' />
        </div>
        <h5 className='ko-main-text-center-h5 text-center position-relative'>PROVIDING AMAZING</h5>
            <h2 className='ko-main-text-center-h2 text-center   position-relative'>education wordpress theme</h2>
            <p className='ko-main-text-center-p text-center position-relative'> The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
            <div className="ko-main-buttom-page text-center ko-main-buttom-page-update">
            <a href="#" className="ko-main-buttom-page-a">
              Explorer course
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EducationTheme