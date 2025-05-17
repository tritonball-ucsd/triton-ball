// OurWork.tsx
import "./ourwork.css";
import Card from "../Card/card";
import PROJECTS from "../../data/projects.json";
import EmblaCarousel from "./carousel";

function OurWork() {
  return (
    <div className="ourwork">
      <div className="ourwork-title">
        <h1>OUR WORK</h1>
      </div>
      <div className="section-title">
        <h2>
          PROJECTS <span style={{ color: "gold", fontSize: "3rem", paddingLeft: "8px" }}>❯</span>
        </h2>
      </div>
      <EmblaCarousel slides={PROJECTS.map((_, i) => i)} />
    </div>
  );
}

export default OurWork;
