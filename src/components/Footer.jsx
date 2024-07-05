import "../App.css";
import footText1 from "../../image/Designer.jpeg"
import footText2 from "../../image/Designer.jpeg"
import footText3 from "../../image/Designer.jpeg"

function Footer() {
  return (
    <header>
      <h1>Footer</h1>
      <footer className="footer"></footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">MyPortfolio</h1>
          <p>
            MyPortfolio showcases the projects and achievements of a dedicated web developer and designer.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp;00000</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@myportfolio.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab GITHUB"></i></a>
            <a href="#"><i className="fab LINKED-IN"></i></a>
            <a href="#"><i className="EMAIL"></i></a>
                </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Me</h2>
          <form action="index.html" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom"></div>
        &copy; myportfolio.com | Designed by Me
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