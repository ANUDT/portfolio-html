import "../App.css";
import avatar from "../../image/adt.jpeg"

function AboutMe() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">About me </a>
          </li>
          <li>
            <a href="/project">Project </a>
          </li>
          <li>
            <a href="/">TEXT </a>
          </li>
        </ul>
      </nav>
          <h1>AboutMe</h1>
          <div className="avatar container">
          <img src={avatar} className="avatar"/>
          </div>
 
      <p>text</p>
    </header>
  );
}

export default AboutMe;