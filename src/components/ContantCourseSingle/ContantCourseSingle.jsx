import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "../ContantCourseSingle/ContantCourseSingle.css";
import Overview from "../Overview/Overview";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import Reviews from "../Reviews/Reviews";
import CourseFAQs from "../CourseFAQs/CourseFAQs";
import { useState } from "react";

export default function ContantCourseSingle() {
  const [show1 , setShow1]=useState(false);
  const [show2 , setShow2]=useState(false);
  const [show3 , setShow3]=useState(false);
  const [show4 , setShow4]=useState(false);
  const [show5 , setShow5]=useState(false);
  return (
   
      <div className="mb-5">
        <div class="countener-1">
          <div class="ka-top">
            <div class="ka-top-div-1">
              <h4 class="ka-top-div-1-h1" onClick={()=>setShow1(!show1)} >Overview</h4>
            </div>
            <div class="ka-top-div-2">
              <h4 class="ka-top-div-2-h1" onClick={()=>setShow2(!show2)}>Curriculum</h4>
            </div>
            <div class="ka-top-div-3">
              <h4 class="ka-top-div-3-h1" onClick={()=>setShow3(!show3)}>Instructor</h4>
            </div>
            <div class="ka-top-div-4">
              <h4 class="ka-top-div-4-h1" onClick={()=>setShow4(!show4)}>FAQs</h4>
            </div>
            <div class="ka-top-div-5">
              <h4 class="ka-top-div-5-h1" onClick={()=>setShow5(!show5)}>Reviews</h4>
            </div>
          </div>
        </div>
        <div className="ko-ContantCourseSingle">
          {show1 ? <Overview/>  : null}
          {show2 ? <Curriculum/>  : null}
          {show3 ? <Instructor/>  : null}
          {show4 ? <CourseFAQs/>  : null}
          {show5 ? <Reviews/>  : null}
          {/* <Routes>
          && !show2 && !show3 && !show4 && !show5
            <Route path="/" exact={true} Component={Overview} />
            <Route path="/Curriculum" exact={true} Component={Curriculum} />
            <Route path="/Instructor" exact={true} Component={Instructor} />
            <Route path="/FAQs" exact={true} Component={CourseFAQs} />
            <Route path="/Reviews" exact={true} Component={Reviews} />
          </Routes> */}
        </div>
      </div>
   
  );
}
