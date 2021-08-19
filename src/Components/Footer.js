import React from "react";
import "../assets/css/Footer.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <>
      <footer className="footer-a">
        <Container fluid className="flu">
          <Row>
            <Col sm={1}>
            </Col>
            <Col md={4}>
              <p className="brand1" data-letters="T">
                TESQ Labs
              </p>
              <p className="f-text">
                TESQ Labs offers innovative digital business solutions for both
                small businesses and large enterprises.
              </p>
              <p className="f-copy">
                &copy; TESQ Labs 2021. All rights reserved
              </p>
            </Col>
            <Col md={2} className="text-center">
              <h5 className="f-title">Sitemap</h5>
              <ul>
                <li className="f-list">
                  <a href="/" className="f-link">Home</a>
                </li>
                <li className="f-list">
                  <a href="/about" className="f-link">About</a>
                </li>
                <li className="f-list">
                  <a href="/product" className="f-link">Products</a>
                </li>
                <li className="f-list">
                  <a href="#!" className="f-link">Solutions</a>
                </li>
                <li className="f-list">
                  <a href="/contact" className="f-link">Contact</a>
                </li>
              </ul>
            </Col>
            <Col md={2}  className="text-center">
            <h5 className="f-title1">Useful Links</h5>
              <ul>
                <li className="f-list">
                  <a href="/career" className="f-link">Careers</a>
                </li>
              </ul>
            </Col>
            <Col md={2}  className="text-center">
            <h5 className="f-title2">Follow Us</h5>
              <ul>
                <li className="f-list">
                  <a href="#!" className="f-link">Twitter</a>
                </li>
                <li className="f-list">
                  <a href="#!" className="f-link">LinkedIn</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
