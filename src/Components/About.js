import React from "react";
import "../assets/css/About.css";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

export const About = () => {
  return (
    <Container className="con-c">
      <Row>
        <Col >
          <Card className="text-center b">
            <Card.Header className="we">Who Are We?
            <p className="border-a"></p></Card.Header>
            <Card.Body>
              <Card.Text className="con-b">
                We are a company of passionate technology and business
                professionals. At TESQ Labs, we belive that traditional business
                processes are no more fit for a fast-changing digitally
                connected world which has brought forward its modern set of new
                contemporary. We are here to change that. We are here to rethink
                and reinvent for this new future in which businesses are
                operating.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
