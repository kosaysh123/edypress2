import "./Contact.css";
import img1 from "./img/map.png";
import img2 from "./img/i.png";
import img3 from "./img/Icon.png";
import img4 from "./img/icon-map.png";
import ContactUs from "../../components/ContactUs/ContactUs";
function Contact() {
  return (
    <div class="container g-4">
      <div class="KA-countact">
        <div class="KA-countact-div-1">
          <h1 class="KA-countact-div-1-h1">Need a direct line?</h1>
          <div class="KA-countact-div-info">
            <p class="KA-countact-div-info-p">
              Cras massa et odio donec faucibus in. Vitae pretium massa dolor
              ullamcorper lectus elit quam.
            </p>
            <div class="KA-countact-div-info-2">
              <div class="KA-countact-div-info-2-icon">
                <img src={img2} alt="" />
              </div>
              <div class="KA-countact-div-info-2-text">
                <p class="KA-countact-div-info-2-text-p">Phone</p>
                <h5 class="KA-countact-div-info-2-text-h5">(123) 456 7890</h5>
              </div>
            </div>
            <div class="KA-countact-div-info-3">
              <div class="KA-countact-div-info-2-icon">
                <img src={img3} alt="" />
              </div>
              <div class="KA-countact-div-info-2-text">
                <p class="KA-countact-div-info-2-text-p">email</p>
                <h5 class="KA-countact-div-info-2-text-h5">
                  contact@thimpress.com
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="KA-countact-map">
          <img class="KA-countact-map-img" src={img1} alt="" />
          <img class="map-icon" src={img4} alt="" />
        </div>
      </div>
      <ContactUs/>
    </div>
  );
}

export default Contact;
