import { Link } from "react-router-dom";
import logoIcon from "../../assets/brain.png";

export default function MainNavigation() {
  return (
    <header id="header-container">
      <nav>
        <div id="id-info">
          <img
            alt="logo that represents a tech brain"
            id="logo"
            src={logoIcon}
          />
          <p>English Learning System</p>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sentences">Sentences</Link>
          </li>
          <li>
            <Link to="/dictionary">Dictionary</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
