import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useEffect, useState } from "react";
import "./Components.css";

function ProjectFeaturedItem({
  orientation,
  title,
  para,
  techs,
  gLink,
  sLink,
  image,
}) {
  const [techsArr, setTechsArr] = useState([]);

  useEffect(() => {
    setTechsArr(techs);
  });
  return (
    <div className={`projectFeaturedItem ${orientation}`}>
      <img src={image} className="pi__image" />
      <div className="project__text--container">
        <h3 className="project__version">Featured Project</h3>
        <h1 className="project__title">{title}</h1>
        <p className="project__para">{para}</p>

        <ul className="project__techs">
          {techsArr.map((el, index) => (
            <li className="project__tech--item" key={index}>
              {el}
            </li>
          ))}
        </ul>
        <div className="project__button--container">
          <a href={gLink} target={"_blank"}>
            <Button className="project__button" variant="outlined">
              <GitHubIcon className="project__button--icon" />
            </Button>
          </a>
          <a href={sLink} target={"_blank"}>
            <Button className="project__button" variant="outlined">
              <LinkIcon className="project__button--icon" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectFeaturedItem;
