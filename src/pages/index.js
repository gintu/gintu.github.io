import React from "react";
import "../style/main.scss";
import Home from "../sections/home/home";
import Story from "../sections/story/story";
import Work from "../sections/work/work";
import Education from "../sections/education/education";
import Skill from "../sections/skills/skill";
import Projects from "../sections/projects/projects";
import Footer from "../sections/footer/footer";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

export default function Index() {
  return (
    <Fade bottom duration={100} delay={0} distance="30px" cascade>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gintu Tom</title>
        <meta name="description" content="personal portfolio of gintu tom" />
        <meta
          name="keywords"
          content="gintu, tom, gintu tom, gintu tom portfolio, rit, rajiv gandhi institute of technology, envestnet, UI developer, UMP, frontend developer, software engineer, vayala, kottayam, gintu github, gintu linkedin"
        />
      </Helmet>
      <Home />
      <Story />
      <Work />
      <Education />
      <Skill />
      <Projects />
      <Footer />
    </Fade>
  );
}
