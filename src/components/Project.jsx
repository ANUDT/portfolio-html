import "../App.css";
import project1 from "../../image/adt.jpeg"
import project2 from "../../image/adt.jpeg"
import project3 from "../../image/adt.jpeg"

function Project() {
  return (
    <header>
      <h1>Project</h1>
      <div className="project container">
         <img src={project1} className="project 1"/>
         <a href= "Github.com">Project 1</a>
          <img src={project2} className="project 2"/>
          <a href= "Github.com">Project 2</a>
          <img src={project3} className="project 3"/>
          <a href= "Github.com">Project 3</a>
          
          </div>
    </header>
  );
}

export default Project;