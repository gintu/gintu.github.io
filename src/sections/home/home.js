import React from "react";
import * as classes from "./home.module.scss";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import Scrollup from "./scrollup";

export default function Home() {
  return (
    <div className={classes.Home}>
      <h4>
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
      </h4>
      <h2>I' am Gintu Tom</h2>
      <h3>developer, designer</h3>
      <div>
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
    </div>
  );
}
