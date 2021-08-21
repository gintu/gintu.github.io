import React from "react";
import * as classes from "./work.module.scss";
import Underline from "../../components/underline/underline";

export default function Work() {
  return (
    <div className={classes.Work}>
      <h2>Work</h2>
      <Underline width="105px" />

      <div className={classes.TimelineContainer}>
        <div className={classes.TimeContainer}>
          <p className={classes.Time}>2020</p>
        </div>
        <div className={classes.CardContainer}>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <p className={classes.Title}>Envestnet</p>
              <p className={classes.SubTitle}>Senior Front-end developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.TimelineContainer}>
        <div className={classes.TimeContainer}>
          <p className={classes.Time}>2018</p>
        </div>
        <div className={classes.CardContainer}>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <p className={classes.Title}>Clevero</p>
              <p className={classes.SubTitle}>Full-stack developer</p>

              <ul className={classes.Details}>
                <li>Developing modules end to end</li>
                <li>Mainly involved with React and Node</li>
                {/* <li>analytics driven design</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
