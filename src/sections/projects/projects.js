import React from "react";
import Card from "../../components/card/card";
import Fade from "react-reveal/Fade";

import projectsList from "./projectsList";

export default function Projects() {
  //   const toRender = skillList.map((skill) => {
  //     return (
  //       <div >
  //         <h4>{skill.title}</h4>

  //       </div>
  //     );
  //   });
  return (
    <section className="project" id="projects">
      <Fade bottom duration={300} delay={200} distance="30px" cascade>
        <h1 className="projectsTitle">Projects</h1>

        <div className="grid-container">
          {projectsList.map((project) => (
            <Fade
              bottom
              duration={300}
              delay={10}
              distance="30px"
              key={project.title}
            >
              <Card
                title={project.title}
                description={project.description}
                tools={project.tools}
                // key={project.title}
              />
            </Fade>
          ))}
        </div>
      </Fade>
    </section>
  );
}
