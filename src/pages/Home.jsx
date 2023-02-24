import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import Sides from "../components/Sides";
import "./Pages.css";

function Home() {
  return (
    <div className="home">
      <Sides />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default Home;
