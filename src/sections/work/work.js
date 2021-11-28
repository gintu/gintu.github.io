import React from "react";
import Fade from "react-reveal/Fade";

export default function Work() {
  return (
    <section id="work">
      <Fade bottom duration={300} delay={200} distance="30px" cascade>
        <h1>Work</h1>
        <div className="container">
          <div className="TimelineContainer">
            <div className="TimeContainer">
              <Fade bottom duration={500} delay={200} distance="60px">
                <p className="Time">2020</p>
              </Fade>
            </div>
            <div className="CardContainer">
              <div className="Card">
                <div className="CardContent">
                  <p className="Title">Envestnet</p>
                  <p className="SubTitle">Senior Front-end developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="TimelineContainer">
            <div className="TimeContainer">
              <Fade bottom duration={500} delay={200} distance="50px">
                <p className="Time">2018</p>
              </Fade>
            </div>
            <div className="CardContainer">
              <div className="Card">
                <div className="CardContent">
                  <p className="Title">Clevero</p>
                  <p className="SubTitle">Full-stack developer</p>

                  <ul className="Details">
                    <li>Developing modules end to end</li>
                    <li>Mainly involved with React and Node</li>
                    {/* <li>analytics driven design</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
