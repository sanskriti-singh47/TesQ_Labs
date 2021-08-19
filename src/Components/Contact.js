import React from "react";
import "../assets/css/Contact.css";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from '../assets/image/Main image.svg';

export const Contact = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <Card border="light" className="card-b">
              <Card.Body>
                <Card.Title className="title">Contact Us</Card.Title>
                <Card.Text className="text-b">
                  Contact us via this form and we will get back to you as soon
                  as possible.
                </Card.Text>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control type="text" placeholder="Your Name*" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control type="email" placeholder="Your Email ID*" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control as="textarea" rows={3} placeholder="Your message for us"/>
                  </Form.Group>
                  <Button variant="primary" type="submit0" className="btn-b" style={{marginLeft:'30%'}}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-c">
              <img src={Image} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
