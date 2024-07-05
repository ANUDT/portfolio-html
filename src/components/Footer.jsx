import "../App.css";
import footText1 from "../../image/Designer.jpeg"
import footText2 from "../../image/Designer.jpeg"
import footText3 from "../../image/Designer.jpeg"

function Footer() {
  return (
    <header>
      <h1>Footer</h1>
      <div className="footText container">
         <img src={footText1} className="footText 1"/>
         <a href= "Github.com">footText 1</a>
          <img src={footText2} className="footText 2"/>
          <a href= "Github.com">FootText 2</a>
          <img src={footText3} className="footText 3"/>
          <a href= "Github.com">FootText 3</a>
          </div>
    </header>
  );
}

export default Footer;