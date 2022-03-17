import React from "react";
import Fade from "react-reveal/Fade";

export default function story() {
  return (
    <section className="story" id="about">
      <Fade bottom duration={300} delay={200} distance="30px" cascade>
        <h1>My Story</h1>
        <div>
          <p>
            I am an ordinary person who loves to code. I have been coding for
            the past 9 years and I am currently working at Envestnet as a Senior
            Frontend Engineer. I started off making C++ console games in school
            and later on, I started making websites. I have a keen eye for
            design and was once ready to give up everything for cool, flashy
            websites. I started my professional journey as a Full-stack
            developer and later switched to Frontend as I enjoyed it more.
          </p>
          <p>
            I am a big fan of technology and recently got interested in
            economics. I do a little bit of traveling and photography. I used to
            read a lot when I was younger, but now just web surfing and Netflix
          </p>
        </div>
      </Fade>
    </section>
  );
}
