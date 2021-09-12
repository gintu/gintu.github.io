import React from "react";
import Chip from "../../components/chips/chips";

import skillList from "./skillList";

export default function Skill() {
  const toRender = skillList.map((skill) => {
    return (
      <div className="chipSection">
        <h4>{skill.title}</h4>
        <div>
          {skill.content.map((cont) => (
            <Chip content={cont} />
          ))}
        </div>
      </div>
    );
  });
  return (
    <section>
      <h1 className="chipSection">Skills</h1>
      <div>{toRender}</div>
    </section>
  );
}
