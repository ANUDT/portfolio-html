import "../App.css";
import project1 from "../../image/adt.jpeg"
import project2 from "../../image/modern computer.jpeg"
import project3 from "../../image/hacking.jpeg"
import { expertise } from "../data/value.jsx"

function Skills() {
  return (
    <main>
      <div>
            <h1>Skills</h1>
            <div className="skills-container">
                {expertise.map(expertise => (
                    <div key={expertise.skills.name} className="skills-card">
                        <p><strong>name:</strong> {expertise.skills.name}</p>
                        <p><strong>image:</strong> {expertise.skills.image}</p>
                    </div>
                ))}
            </div>
        </div>



      {/* <div className="project container">
          <a href= "Github.com"><img src={project1} className="project item"/>Project 1</a>
          <a href= "Github.com"><img src={project2} className="project item"/>Project 2</a>
          <a href= "Github.com"><img src={project3} className="project item"/>Project 3</a>
        </div> */}
    </main>
  );
}

export default Skills;