import styles from '../header.css';

function Header() {
  return (
    <div className={styles.App}>;
      <header>
      <h1>ANU</h1>
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

    </header>
    </div>
)}

export default Header;