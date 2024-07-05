import "../App.css";
import avatar from "../../image/adt.jpeg"

function AboutMe() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">ABOUT ME </a>
          </li>
          <li>
            <a href="/project">PROJECTS </a>
          </li>
          <li>
            <a href="/">SKILLS </a>
          </li>
          <li>
            <a href="/">EXPERIENCE </a>
          </li>
          <li>
            <a href="/">EDUCATION </a>
          </li>
        </ul>
      </nav>
      <span></span>
          <h1>ANU</h1>
          <div className="avatar container">
          <img src={avatar} className="avatar"/>
          </div>
 
      <p>DT</p>
    </header>
  );
}

export default AboutMe;