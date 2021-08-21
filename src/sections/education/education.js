import React from "react";
import * as classes from "../work/work.module.scss";
import Underline from "../../components/underline/underline";

export default function Education() {
  return (
    <div className={classes.Work}>
      <h2>Education</h2>
      <Underline width="240px" />

      <div className={classes.TimelineContainer}>
        <div className={classes.TimeContainer}>
          <p className={classes.Time}>2018</p>
        </div>
        <div className={classes.CardContainer}>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <p className={classes.Title}>
                Rajiv Gandhi Institute of Technology, Kottayam
              </p>
              <p className={classes.SubTitle}>
                B.Tech in Computer Science and Engineering
              </p>
              <ul className={classes.Details}>
                <li>Served as the president of Computer Science Association</li>
                <li>Conducted and Coordinated several events</li>
                {/* <li>Won prices in many events</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.TimelineContainer}>
        <div className={classes.TimeContainer}>
          <p className={classes.Time}>2014</p>
        </div>
        <div className={classes.CardContainer}>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <p className={classes.Title}>De Paul Public School, Kottayam</p>
              <p className={classes.SubTitle}>General Subjects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
