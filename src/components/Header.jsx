import Navigation from './Navigation';
import styles from '../header.css';
import headText1 from '../../image/Designer.jpeg';
import headText2 from '../../image/Designer.jpeg';
import headText3 from '../../image/Designer.jpeg';

function Header() {
  return (
    <div className={styles.App}>;
      <header>
        <h1>MY PORTFOLIO</h1>
        <Navigation />
        </header>
        <div className="h-content">
          <div className="h-section about">
            <h1 className="logo-text">MyPortfolio</h1>
            <p>
            TEXT
            </p>
           
            <div className="socials">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div className="h-section contact-form">
            <h2>Contact Me</h2>

            <div className="contact">
              <span><i className="fas fa-phone"></i> &nbsp;00000</span>
              <span><i className="fas fa-envelope"></i> &nbsp; info@myportfolio.com</span>
            </div>

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
        <div className="h-bottom">&copy; adt.com | Designed by Me</div>
        <div className="headText container">
          <img src={headText1} className="headText-1 style=width:100%" alt="HeadText 1" />
          <a href="https://github.com">HeadText 1</a>
          <img src={headText2} className="headText-2 style=width:100%" alt="HeadText 2" />
          <a href="https://github.com">HeadText 2</a>
          <img src={headText3} className="headText-3 style=width:100%" alt="HeadText 3" />
          <a href="https://github.com">HeadText 3</a>
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
      <header>
  {/* Your header content */}
</header>
</div>
)}

export default Header;