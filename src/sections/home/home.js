import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <section className="home">
      <Fade bottom duration={300} delay={5} distance="30px">
        <div className="scrollup-container">
          <h3 className="home-h3">Hi,</h3>
        </div>
      </Fade>
      <Fade bottom duration={300} delay={300} distance="30px">
        <h1 className="home-h1">I' am Gintu Tom</h1>
      </Fade>
      <button onClick={() => setCounter(counter + 1)}>counter</button>

      {counter}
      <Fade bottom duration={300} delay={400} distance="30px">
        <h2 className="home-h2">Program writer @ Envestnet</h2>
      </Fade>
      <Fade bottom duration={300} delay={500} distance="30px">
        <div className="icons-container">
          <a
            href="https://in.linkedin.com/in/gintu-tom-080b2899"
            target="_blank"
          >
            <img src={linkedin} alt={"linkedin"} />
          </a>
          <a href="https://www.facebook.com/gintu.tom" target="_blank">
            <img src={facebook} alt={"facebook"} />
          </a>
          <a href="https://www.youtube.com/c/gintutom" target="_blank">
            <img src={youtube} alt={"youtube"} />
          </a>
        </div>
      </Fade>
    </section>
  );
}
