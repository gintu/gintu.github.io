import React from "react";
import * as classes from "./skill.module.scss";
import Underline from "../../components/underline/underline";

export default function Skill() {
  return (
    <div className={classes.Skill}>
      <h2>My Story</h2>
      <Underline width="200px" />
      <div className={classes.TextContainer}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
