import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="grid-3-col">
        <div className="column">
          <h2> Email </h2>
          <p>Jeffreykkchan@gmail.com</p>
        </div>
        <div className="column">
          <a
            className="footer-links"
            href="https://github.com/KaiKitJeffreyChan"
            target="_blank"
            rel="noreferrer"
          >
            <h2> Github </h2>
          </a>
          <p>https://github.com/KaiKitJeffreyChan</p>
        </div>
        <div className="column">
          <a
            className="footer-links"
            href="https://www.linkedin.com/in/kkjc/"
            target="_blank"
            rel="noreferrer"
          >
            <h2> Linkedin </h2>
          </a>
          <p>https://www.linkedin.com/in/kkjc/</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
