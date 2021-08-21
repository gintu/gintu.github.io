import React from "react";
import * as classes from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.container}>
        <div>
          <h5>designed and built by gintu</h5>
        </div>
        <div>
          <h5>©2021</h5>
        </div>
      </div>
    </div>
  );
}
