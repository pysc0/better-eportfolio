import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useEffect, useState } from "react";
import "./Components.css";

function ProjectOtherItem({ title, para, techs, gLink, sLink }) {
  const [techsArr, setTechsArr] = useState([]);

  useEffect(() => {
    setTechsArr(techs);
  });
  return (
    <div className="projectOtherItem--container">
      <div className="projectOtherItem">
        <div className="projectOther__top">
          <FolderOpenIcon className="projectOther__top--icon" />
          <div className="projectOther__button--container">
            <a
              className="projectOther__button--link"
              href={gLink}
              target={"_blank"}
            >
              <GitHubIcon className="projectOther__button--icon" />
            </a>
            <a
              className="projectOther__button--link"
              href={sLink}
              target={"_blank"}
            >
              <LinkIcon className="projectOther__button--icon" />
            </a>
          </div>
        </div>
        <h3 className="projectOther__title">{title}</h3>
        <p className="projectOther__para">{para}</p>
        <ul className="projectOther__techs">
          {techsArr.map((el, index) => (
            <li className="project__tech--item" key={index}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectOtherItem;
