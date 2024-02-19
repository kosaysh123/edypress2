import AddOne from '../../components/AddOne/AddOne'
import Card from '../../components/Card/Card'
import CardLineFeaturedCourses from '../../components/CardLineFeaturedCourses/CardLineFeaturedCourses'
import CoursSingle from '../../components/CoursSingle/CoursSingle'
import EducationTheme from '../../components/EducationTheme/EducationTheme'
import FeaturedCourses from '../../components/FeaturedCourses/FeaturedCourses'
import FeedBacks from '../../components/FeedBacks/FeedBacks'
import Footer from '../../components/Footer/Footer'
import GrowUs from '../../components/GrowUs/GrowUs'
import Hero from '../../components/Hero/Hero'
import LastStart from '../../components/LastStart/LastStart'
import LatestArticles from '../../components/LatestArticles/LatestArticles'
import NavBar from '../../components/NavBar/NavBar'
import TopCategories from '../../components/TopCategories/TopCategories'
import  '../Home/Home.css'

function Home() {
  return (
    <div className='ko-home-page'>
      
      <Hero/>
        <TopCategories/>
        <FeaturedCourses/>
        <AddOne/>
        <Card/>
        <GrowUs/>
        <EducationTheme/>
        <FeedBacks/>
        <LastStart/>
        <LatestArticles/>
    </div>
  )
}

export default Home