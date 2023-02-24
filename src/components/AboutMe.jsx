import { useState } from "react";
import AboutText from "./AboutText";
import "./Components.css";




function AboutMe() {
  const [aboutText, setAboutText] = useState();
  

  setTimeout(() => {
    setAboutText(<AboutText />);
  }, 1750);

  return (
    <section id="aboutme">
      <div className="about__container">{aboutText}</div>
    </section>
  );
}

export default AboutMe;
