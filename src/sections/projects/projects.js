import React from "react";
import Card from "../../components/card/card";

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
    <section>
      <h1 className="projectsTitle">Projects</h1>

      <div className="grid-container">
        {projectsList.map((project) => (
          <div>
            <Card
              title={project.title}
              description={project.description}
              tools={project.tools}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
