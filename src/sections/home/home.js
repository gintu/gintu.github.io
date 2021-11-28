import React from "react";
import Fade from "react-reveal/Fade";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import ScrollUp from "./scrollup";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="scrollup-container">
        <h3 className="home-h3">
          {/* <ScrollUp
              elements={[
                "Hi",
                "നമസ്കാരം",
                "Bonjour",
                "Hola",
                "ٱلسَّلَامُ عَلَيْكُمْ",
                "नमस्ते",
              ]}
            /> */}
          Hi,
        </h3>
      </div>
      <h1 className="home-h1">I am Gintu Tom</h1>

      <h2 className="home-h2">Program writer @ Envestnet</h2>
      <div className="icons-container">
        <a
          href="https://in.linkedin.com/in/gintu-tom-080b2899"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt={"linkedin"} />
        </a>
        <a
          href="https://www.facebook.com/gintu.tom"
          rel="noreferrer"
          target="_blank"
        >
          <img src={facebook} alt={"facebook"} />
        </a>
        <a
          href="https://www.youtube.com/c/gintutom"
          rel="noreferrer"
          target="_blank"
        >
          <img src={youtube} alt={"youtube"} />
        </a>
      </div>
    </section>
  );
}
