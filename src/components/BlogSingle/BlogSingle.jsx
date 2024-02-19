import './BlogSingle.css'
import img1 from "./img/Icon1.png"
import img2 from "./img/Icon2.png"
import img3 from "./img/Icon3.png"
import img4 from "./img/Icon4.png"
import img5 from "./img/Vector.png"
import img6 from "./img/Vector2.png"
import img7 from "./img/Vector3.png"
import img8 from "./img/Vector4.png"
import img9 from "./img/Icon5.png"
import Comment from '../Comment/Comment'
import commet from "../Reviews/img/img1.png"
function BlogSingle() {
  return (
    <div class="KA-Bloog">
    <div class="KA-title-meta">
          <h1 class="KA-title-meta-h1">Best LearnPress WordPress Theme Collection for 2023</h1>
          <div class="KA-title-meta-icon">
                <div class="KA-title-meta-icon-1">


                      <img class="icon-2" src={img5} alt=""/>
                      <h1 class="KA-title-meta-icon-h1 mb-0">Determined-poitras</h1>
                </div>
                <div class="KA-title-meta-icon-1">


                      <img class="icon-2" src={img6} alt=""/>
                      <h1 class="KA-title-meta-icon-h1 mb-0">Jan 24, 22023</h1>
                </div>
                <div class="KA-title-meta-icon-1">


                      <img class="icon-2" src={img7} alt=""/>
                      <h1 class="KA-title-meta-icon-h1 mb-0">20 Comments</h1>
                </div>

          </div>
    </div>
    <div class="KA-contaent">
          <img class="KA-contaent-img" src={img8} alt=""/>
          <p class="KA-contaent-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis
                faucibus odio arcu duis
                dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut
                eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non.
                Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis
                dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut
                eleifend luctus ut. Id sed faucibus bibendum augue id cras purus.</p>
    </div>
    <p class="KA-tiag-p">Tags:</p>
    <div class="KA-tiag">
          <div class="KA-tiag-part">
                <div class="KA-tiag-part-1">
                      <p class="KA-tiag-part-p">Free couses</p>
                </div>
          </div>
          <div class="KA-tiag-part">
                <div class="KA-tiag-part-1">
                      <p class="KA-tiag-part-p">Marketing</p>
                </div>
          </div>
          <div class="KA-tiag-part">
                <div class="KA-tiag-part-1">
                      <p class="KA-tiag-part-p">Idea</p>
                </div>
          </div>
          <div class="KA-tiag-part">
                <div class="KA-tiag-part-1">
                      <p class="KA-tiag-part-p">LMS</p>
                </div>
          </div>
          <div class="KA-tiag-part">
                <div class="KA-tiag-part-1">
                      <p class="KA-tiag-part-p">LearnPress</p>
                </div>
          </div>
          <div class="KA-tiag-part">
                <div class="KA-tiag-part-1">
                      <p class="KA-tiag-part-p">Instructor</p>
                </div>
          </div>
    </div>
    <div class="KA-shear">
          <p class="KA-shear-p">Share:</p>
          <img src={img1} alt="" className='ko-image-socail'/>
          <img src={img2} alt="" className='ko-image-socail'/>
          <img src={img3} alt="" className='ko-image-socail'/>
          <img src={img4} alt="" className='ko-image-socail'/>
          <img src={img9} alt="" className='ko-image-socail'/>
    </div>
    <div className="ko-comments">
      <h4>Comments</h4>
      <p>20 comments</p>
      <div className="ko-div-comment">
            <div className="ko-commet-1">
            <Comment img={commet}/> 
            </div>
            <div className="ko-commet-2">
            <Comment img={commet}/>
            </div>
            <div className="ko-commet-1">
            <Comment img={commet}/>
            </div>
      
      
      
      </div>
    </div>

</div>
  )
}

export default BlogSingle