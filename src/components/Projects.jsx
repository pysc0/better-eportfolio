import "./Components.css";
import ProjectFeaturedItem from "./ProjectFeaturedItem";
import ProjectOtherItem from "./ProjectOtherItem";
import ecom from "../assets/ecom.png";
import firebaseauth from "../assets/firebaseauth.png";
import googleclone from "../assets/googleclone.png";

function Projects() {
  return (
    <section id="projects">
      <div className="section__title">
        <span className="section__title--number text--orange">02.</span>
        <h1 className="section__title--text">Some Of My Work</h1>
        <div className="section__title--line"></div>
      </div>
      <div className="projects__features">
        <ProjectFeaturedItem
          orientation={"projectItemReverse"}
          title={"Google Clone"}
          para={
            "Google Search Clone built using the Google API to retrieve Indexed data from all the available websites."
          }
          techs={["HTML", "CSS", "JavaScript", "React", "Google API"]}
          
          sLink={"https://googleclone-three.vercel.app/"}
          image={googleclone}
        />
        <ProjectFeaturedItem
          title={"ECommerce"}
          para={
            "ECommerce application wich displays available books, has search and sorting capabilities while having a loading state."
          }
          techs={["HTML", "CSS", "JavaScript", "React"]}
          sLink={"https://libraryproject.vercel.app/"}
          image={ecom}
        />
        <ProjectFeaturedItem
          orientation={"projectItemReverse"}
          title={"FireBase Auth"}
          para={
            "A Web App based on the FireBase backend. More of a test project so I could have some experience with backends."
          }
          techs={["HTML", "CSS", "JavaScript", "React", "FireBase"]}
        
          sLink={"https://firebasepractice.vercel.app/"}
          image={firebaseauth}
        />
      </div>

      <div className="section__title spe3">
        <div className="section__title--line spe2"></div>
        <h1 className="section__title--text spe1">
          Other Interesting Projects
        </h1>
        <div className="section__title--line spe2"></div>
      </div>
      <div className="projects__others">

        <ProjectOtherItem
          title={"Notflix"}
          para={
            "Movie search Web App made using TheMovieDB API, first API interaction."
          }
          techs={["HTML", "CSS", "JavaScript", "TheMovieDB API"]}
          sLink={"https://cutzudev.github.io/Notflix/"}
        />
        <ProjectOtherItem
          title={"TReact Recreation"}
          para={"A TReact Template recreation to exercise my CSS skills."}
          techs={["HTML", "CSS", "JavaScript"]}
          sLink={"https://cutzudev.github.io/React-Template/"}
        />
      </div>
    </section>
  );
}

export default Projects;
