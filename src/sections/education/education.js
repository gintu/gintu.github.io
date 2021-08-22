import React from "react";

import Underline from "../../components/underline/underline";

export default function Education() {
  return (
    <section>
      <h1>Education</h1>
      <div className="container">
        <div className="TimelineContainer">
          <div className="TimeContainer">
            <p className="Time">2018</p>
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
            <p className="Time">2014</p>
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
    </section>
  );
}
