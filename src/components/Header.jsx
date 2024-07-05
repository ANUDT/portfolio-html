import Navigation from './Navigation';
import styles from '../header.css';
import headText2 from "../../image/Designer.jpeg"
import headText3 from "../../image/Designer.jpeg"
import headText1 from "../../image/Designer.jpeg"

function Header() {
  return <div className={styles.App}> WELCOME!</div>;
}

    <header>
      <h1>MY PORTFOLIO</h1>
      <Navigation />
      <h className="h"></h>
      <div className="h-content">
        <div className="h-section about">
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



        <div className="h-section contact-form">
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
      <div className="h-bottom"></div>
      &copy; adt.com | Designed by Me
      <div className="headText container">
        <img src={headText1} className="headText 1" />
        <a href="Github.com">headText 1</a>
        <img src={headText2} className="headText 2" />
        <a href="Github.com">HeadText 2</a>
        <img src={headText3} className="headText 3" />
        <a href="Github.com">HeadText 3</a>
      </div>
      <div className="h-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default H;
    </header>


export default Header;