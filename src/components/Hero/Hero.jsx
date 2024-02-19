import  '../Hero/Hero.css'
import img1 from "../Hero/img/girl.png"
import img2 from "./img/Vector.png"
import img3 from "./img/one scool.png"
import img4 from "./img/Vector2.png"
import img5 from "./img/BACKGROUND.png"
function Hero() {
  return (
    <div class="Ka-hero">
        
            
    <div class="KA-countener">
        <img class="KA-container-img" src={img2} alt=""/>
        <img class="KA-container-img-2" src={img3} alt=""/>
        <img class="KA-container-img-3" src={img4} alt=""/>
        <img class="KA-container-img-4" src={img5} alt=""/>
        <div class="KA-countetnt-text">
            <h1 class="KA-countetnt-text-h1">Build Skills with Online Course</h1>
            <div class="KA-countetnt-text-2">
                <p class="KA-countetnt-text-2-p">We denounce with righteous indignation
                    and dislike men who are so beguiled
                    and demoralized that cannot trouble.</p>
                <button class="KA-countetnt-text-2-button"><a class="KA-countetnt-text-2-button-a" href="#">postes
                        commenet</a></button>
            </div>
        </div>
        <img class="KA-hero-img-1 position-relative " src={img1} alt=""/>
           

        
    </div>

</div>
  )
}

export default Hero