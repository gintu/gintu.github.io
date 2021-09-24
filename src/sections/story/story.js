import React from "react";
import Fade from "react-reveal/Fade";

export default function story() {
  return (
    <section className="story">
      <Fade bottom duration={300} delay={200} distance="30px" cascade>
        <h1>My Story</h1>
        <div>
          <p>
            I am just an ordinary person who loves to code. I have been coding
            for last 9 years and I am currently working at Envestnet as a senior
            frontend engineer. I started off making C++ console games in school
            and later on I started making websites. I have a keen eye for the
            design and was once ready to give up everything for cool designs.
            Time (and responsibilities) has changed me though. Now a days I try
            to strike balance between the two. I started by professional journey
            as a fullstack developer and later converged to frontend as I
            enjoyed it more (still can do backend things though).
          </p>
          <p>
            I am a big fan of technology and recently got interested in
            economics. I do little bit of travelling and photography.
          </p>
        </div>
      </Fade>
    </section>
  );
}
