import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-grid">
        <div className="footer-div-1">
          <h1>gintu.</h1>
        </div>
        <div className="footer-div-2">
          <h3 className="Title">Contact</h3>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gintutom@gmail.com">
            gintutom@gmail.com
          </a>
        </div>
        <div className="footer-div-3">
          <h3 className="Title">Connect</h3>
          <a href="https://in.linkedin.com/in/gintu-tom-080b2899">Linkedin</a>
          <a href="https://www.facebook.com/gintu.tom/">Facebook</a>
          <a href="https://twitter.com/gintutom">Twitter</a>
          <a href="https://github.com/gintu">Github</a>
        </div>
        <div className="footer-div-4">
          <h3 className="Title">Content</h3>
          <a>Home</a>
          <a>About</a>
          <a>Work</a>
          <a>Education</a>
          <a>Projects</a>
        </div>
      </div>
      <p className="bottom-text">Designed and built with love by gintu ©2021</p>
    </section>
  );
}
