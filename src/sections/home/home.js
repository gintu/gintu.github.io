import React from "react";

import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import Scrollup from "./scrollup";

export default function Home() {
  return (
    <section className="home">
      <div className="scrollup-container">
        <h3>
          <Scrollup
            elements={[
              "Hi",
              "നമസ്കാരം",
              "Bonjour",
              "Hola",
              "こんにちは",
              "ٱلسَّلَامُ عَلَيْكُمْ",
              "नमस्ते",
            ]}
          />
          ,
        </h3>
      </div>
      <h1>I' am Gintu Tom</h1>
      <h2>developer, designer</h2>
      <div className="icons-container">
        <a href="https://in.linkedin.com/in/gintu-tom-080b2899" target="_blank">
          <img src={linkedin} alt={"linkedin"} />
        </a>
        <a href="https://www.facebook.com/gintu.tom" target="_blank">
          <img src={facebook} alt={"facebook"} />
        </a>
        <a href="https://www.youtube.com/c/gintutom" target="_blank">
          <img src={youtube} alt={"youtube"} />
        </a>
      </div>
    </section>
  );
}
