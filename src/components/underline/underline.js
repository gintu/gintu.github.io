import React from "react";
import * as classes from "./underline.module.scss";

export default function Underline(props) {
  return (
    <div
      className={classes.Underline}
      style={{ width: `${props.width}` }}
    ></div>
  );
}
