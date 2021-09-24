import React from "react";
import Fade from "react-reveal/Fade";
import Chip from "../../components/chips/chips";

import skillList from "./skillList";

export default function Skill() {
  const toRender = skillList.map((skill) => {
    return (
      <div className="chipSection">
        <h4>{skill.title}</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {skill.content.map((cont, i) => (
            <Fade
              left
              duration={600}
              delay={200}
              distance="30px"
              key={Math.random().toString()}
            >
              <Chip content={cont} />
            </Fade>
          ))}
        </div>
      </div>
    );
  });
  return (
    <section className="skills">
      <Fade bottom duration={300} delay={200} distance="30px" cascade>
        <h1>Skills</h1>
        <div>{toRender}</div>
      </Fade>
    </section>
  );
}
