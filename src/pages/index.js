import React from "react";
import "../style/main.scss";
import Home from "../sections/home/home";
import Story from "../sections/story/story";
import Work from "../sections/work/work";
import Education from "../sections/education/education";
import Skill from "../sections/skills/skill";
import Projects from "../sections/projects/projects";
import Footer from "../sections/footer/footer";

export default function Index() {
  return (
    <div>
      <Home />
      <Story />
      <Work />
      <Education />
      <Skill />
      <Projects />
      <Footer />
    </div>
  );
}
