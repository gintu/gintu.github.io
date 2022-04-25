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
                  <p className="SubTitle">Senior Front-end Engineer</p>
                  <ul className="Details">
                    <li>
                      Currently building UI for Next Generation Proposal which
                      belongs to Envestnet's core platform using react
                    </li>
                    <li>
                      Cleaned up and refactored existing codebase and brought
                      down page load time as much as 500ms.
                    </li>
                    <li>
                      Ideated and built a chrome extension which saved 100s of
                      hours of developer time
                    </li>
                    <li>
                      Part of a team that built an Annuity dashboard and became
                      runners-up in an Internal hackathon. This was later
                      adopted by Envestnet
                    </li>
                    <li>Helped to setup a new team in US</li>
                    {/* <li>analytics driven design</li> */}
                  </ul>
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
                  <p className="SubTitle">Full-stack Engineer</p>

                  <ul className="Details">
                    <li>
                      Worked as a part of a small team to develop an HR
                      management platform for small to midsized companies
                    </li>
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
