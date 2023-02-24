import "./Components.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Sides() {
  return (
    <>
      <div className="side__positionL">
        <div className="side__left side__half">
          <ul className="side__list">
            <li className="side__item">
              <a href="https://github.com/pysc0" target="_blank">
                <GitHubIcon className="side__icon" fontSize="medium" />
              </a>
            </li>
            <li className="side__item">
              <a href="https://www.linkedin.com/in/alex-farkas-1480b6242/">
                <LinkedInIcon className="side__icon" fontSize="medium" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="side__positionR">
        <div className="side__right side__half">
          <div className="side__linkContainer">
            <a
              href="mailto:jacobdennisandrews@icloud.com"
              className="sideRight__link"
            >
              <h2 className="side__right--text">
                jacobdennisandrews@icloud.com
              </h2>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sides;
