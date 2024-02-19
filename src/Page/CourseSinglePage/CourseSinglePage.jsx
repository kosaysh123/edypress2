import ContantCourseSingle from '../../components/ContantCourseSingle/ContantCourseSingle'
import CoursSingle from '../../components/CoursSingle/CoursSingle'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
import NavBar from '../../components/NavBar/NavBar'
import Reviews from '../../components/Reviews/Reviews'
import  '../CourseSinglePage/CourseSinglePage.css'

function CourseSinglePage() {
  return (
    <div className='ko-main-CourseSinglePage'>
        <CoursSingle/>
        <div className='container ko-main-container'>
            <ContantCourseSingle/>
        <LeaveAComment/>
        </div>
        
    </div>
  )
}

export default CourseSinglePage