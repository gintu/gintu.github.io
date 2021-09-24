import React from "react";
import Fade from "react-reveal/Fade";

export default function Education() {
  return (
    <section>
      <Fade bottom duration={300} delay={200} distance="30px" cascade>
        <h1>Education</h1>
        <div className="container">
          <div className="TimelineContainer">
            <div className="TimeContainer">
              <Fade bottom duration={500} delay={200} distance="50px">
                <p className="Time">2018</p>
              </Fade>
            </div>
            <div className="CardContainer">
              <div className="Card">
                <div className="CardContent">
                  <p className="Title">
                    Rajiv Gandhi Institute of Technology, Kottayam
                  </p>
                  <p className="SubTitle">
                    B.Tech in Computer Science and Engineering
                  </p>
                  <ul className="Details">
                    <li>
                      Served as the president of Computer Science Association
                    </li>
                    <li>Conducted and Coordinated several events</li>
                    {/* <li>Won prices in many events</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="TimelineContainer">
            <div className="TimeContainer">
              <Fade bottom duration={500} delay={200} distance="50px">
                <p className="Time">2014</p>
              </Fade>
            </div>
            <div className="CardContainer">
              <div className="Card">
                <div className="CardContent">
                  <p className="Title">De Paul Public School, Kottayam</p>
                  <p className="SubTitle">General Subjects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
