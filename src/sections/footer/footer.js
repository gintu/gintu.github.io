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
          <a>gintutom@gmail.com</a>
        </div>
        <div className="footer-div-3">
          <h3 className="Title">Connect</h3>
          <a>linedin</a>
          <a>twitter</a>
          <a>github</a>
        </div>
        <div className="footer-div-4">
          <h3 className="Title">Content</h3>
          <a>home</a>
          <a>about</a>
          <a>work</a>
          <a>projects</a>
        </div>
      </div>
      <p className="bottom-text">Designed and built with love by gintu ©2021</p>
    </section>
  );
}
