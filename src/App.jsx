import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CourseSinglePage from "./Page/CourseSinglePage/CourseSinglePage";
import CourseSingle from "./Page/CourseSinglePage/CourseSinglePage";
import Home from "./Page/Home/Home";
import AddOne from "./components/AddOne/AddOne";
import Card from "./components/Card/Card";
import CardFeaturedCourses from "./components/CardFeaturedCourses/CardFeaturedCourses";
import CardLineFeaturedCourses from "./components/CardLineFeaturedCourses/CardLineFeaturedCourses";
import CoursSingle from "./components/CoursSingle/CoursSingle";
import CourseCategory from "./components/CourseCategory/CourseCategory";
import Curriculum from "./components/Curriculum/Curriculum";
import EducationTheme from "./components/EducationTheme/EducationTheme";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import FeedBacks from "./components/FeedBacks/FeedBacks";
import Footer from "./components/Footer/Footer";
import GrowUs from "./components/GrowUs/GrowUs";
import HeadAllCourses from "./components/HeadAllCourses/HeadAllCourses";
import Instructor from "./components/Instructor/Instructor";
import LastStart from "./components/LastStart/LastStart";
import LatestArticles from "./components/LatestArticles/LatestArticles";
import LeaveAComment from "./components/LeaveAComment/LeaveAComment";
import NavBar from "./components/NavBar/NavBar";
import Overview from "./components/Overview/Overview";
import Reviews from "./components/Reviews/Reviews";
import TopCategories from "./components/TopCategories/TopCategories";
import { Switch } from "@mui/material";
import ContantCourseSingle from "./components/ContantCourseSingle/ContantCourseSingle";
import AllCourse from "./Page/AllCourse/AllCourse";
import ToCardCourse from "./components/ToCardCourse/ToCardCourse";
import ToCardLineCourse from "./components/ToCardLineCourse/ToCardLineCourse";
import HeadAllArticals from "./components/HeadAllArticals/HeadAllArticals";
import ArticalsCatgory from "./components/ArticalsCatgory/ArticalsCatgory";
import ArticalsCard from "./components/ArticalsCard/ArticalsCard";
import FAQsPage from "./Page/FAQsPage/FAQsPage";
import Contact from "./Page/Contact/Contact";
import BlogSinglePage from "./Page/BlogSinglePage/BlogSinglePage";
import BlogPage from "./Page/BlogPage/BlogPage";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Erro from "./components/Erro/Erro";
function App() {
  return (
<>
<NavBar />
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/CoursePage" exact={true} Component={AllCourse} />
        <Route path="/BlogPage" exact={true} Component={BlogPage} />
        <Route
          path="/CourseSinglePage"
          exact={true}
          Component={CourseSinglePage}
        />
        <Route path="/FAQsPage" exact={true} Component={FAQsPage} />
        <Route path="/Contact" exact={true} Component={Contact} />
        <Route path="/BlogSinglePage" exact={true} Component={BlogSinglePage} />
        <Route path="/LoginRegister" exact={true} Component={LoginRegister} />
      </Routes>
      <Footer />
</>

  );
}

export default App;
