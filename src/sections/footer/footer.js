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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gintutom@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            gintutom@gmail.com
          </a>
        </div>
        <div className="footer-div-3">
          <h3 className="Title">Connect</h3>
          <a
            href="https://in.linkedin.com/in/gintu-tom-080b2899"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            href="https://www.facebook.com/gintu.tom/"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/gintutom"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a href="https://github.com/gintu" rel="noreferrer" target="_blank">
            Github
          </a>
        </div>
        <div className="footer-div-4">
          <h3 className="Title">Content</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
      <p className="bottom-text">designed and built by gintu © 2021</p>
    </section>
  );
}