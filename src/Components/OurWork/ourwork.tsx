// OurWork.tsx
import "./ourwork.css";
import EmblaCarousel from "./carousel";

function OurWork() {
  return (
    <div className="ourwork" id="ourwork">
      <div className="ourwork-title">
        <h2>OUR WORK</h2>
      </div>
      <div className="section-title">
        <h2>
          PROJECTS <span style={{ color: "#F3B818", fontSize: "3rem", paddingLeft: "8px" }}>❯</span>
        </h2>
      </div>
      <EmblaCarousel/>
    </div>
  );
}

export default OurWork;
