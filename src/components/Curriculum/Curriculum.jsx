import "../Curriculum/Curriculum.css";
import img1 from "../Curriculum/img/Vector.png"
import img2 from "../Curriculum/img/Vector1.png"
import img3 from "../Curriculum/img/Vector2.png"

function Curriculum() {
  return (
    <div className="ko-Curriculum">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button ko-accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="ko-head-accordion">
              <h5 className="ko-accordion-h5">Lessons with video content</h5>
              <div className="ko-data-accordion">
                <p className="ko-data-accordion-p1">5 Lessons</p>
                <p className="ko-data-accordion-p2">45 Mins</p>
              </div>
              </div>

            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="ko-contant-main-accordion">
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 12:55</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 13:37</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 10:02</p>
                <img src={img3} alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button ko-accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTow"
              aria-expanded="true"
              aria-controls="collapseTow"
            >
              <div className="ko-head-accordion">
              <h5 className="ko-accordion-h5">Lessons with video content</h5>
              <div className="ko-data-accordion">
                <p className="ko-data-accordion-p1">5 Lessons</p>
                <p className="ko-data-accordion-p2">45 Mins</p>
              </div>
              </div>

            </button>
          </h2>
          <div
            id="collapseTow"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="ko-contant-main-accordion">
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 12:55</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 13:37</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 10:02</p>
                <img src={img3} alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button ko-accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <div className="ko-head-accordion">
              <h5 className="ko-accordion-h5">Lessons with video content</h5>
              <div className="ko-data-accordion">
                <p className="ko-data-accordion-p1">9 Lessons</p>
                <p className="ko-data-accordion-p2">60 Mins</p>
              </div>
              </div>

            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="ko-contant-main-accordion">
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 12:55</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 13:37</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 10:02</p>
                <img src={img3} alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button ko-accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <div className="ko-head-accordion">
              <h5 className="ko-accordion-h5">Lessons with video content</h5>
              <div className="ko-data-accordion">
                <p className="ko-data-accordion-p1">9 Lessons</p>
                <p className="ko-data-accordion-p2">60 Mins</p>
              </div>
              </div>

            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="ko-contant-main-accordion">
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 12:55</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 13:37</p>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="ko-contant-data-line">
              <div className="ko-data-left-accordion">
              <img src={img1} alt="" className="ko-data-left-accordion-img"/>
              <p className="ko-data-left-accordion-p mb-0 ms-2">Lessons with video content</p>
              </div>
              <div className="ko-data-rigth-accordion  ">
                <div className="ko-buttom-private">
                Preview
                </div>
                <p className="ko-data-rigth-accordion-p "> 10:02</p>
                <img src={img3} alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
