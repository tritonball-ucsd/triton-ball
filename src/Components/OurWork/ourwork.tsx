import "./ourwork.css";
import Card from "../Card/card";
import PROJECTS from "../../data/projects.json";

function OurWork() {
    return (
        <div className="ourwork">
            <div className="ourwork-title">
                <h1>OUR WORK</h1>
            </div>
            <div className="section-title" id='projects'>
                <h2>
                    PROJECTS <span style={{ color: "gold", fontSize: "3rem", paddingLeft: "8px" }}>❯</span>
                </h2>
            </div>
            <div className="carousel">
                <div className="carousel-track">
                    {PROJECTS.map((project, index) => (
                        <Card key={`1-${index}`} image={project.image} title={project.title} description={project.description} />
                    ))}
                    {PROJECTS.map((project, index) => (
                        <Card key={`2-${index}`} image={project.image} title={project.title} description={project.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurWork;
