import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../CourseFAQs/CourseFAQs.css";

function CourseFAQs() {
  return (
    <div class="KA-contaent-FQAS">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What Does Royalty Free Mean?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              What Does Royalty Free Mean?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What Does Royalty Free Mean?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              What Does Royalty Free Mean?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFAQs;
