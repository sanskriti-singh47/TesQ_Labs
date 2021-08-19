import React from "react";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../assets/css/Career.css";
import Image from "../assets/image/Main image.svg";

export const Career = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={8} style={{zIndex:'100'}}>
            <Card border="light" className="card-b">
              <Card.Body>
                <Card.Title className="title-b">
                  We are looking for you!
                </Card.Title>
                <Card.Text className="text-b">
                  At TESQ Labs, we are constantly looking for talented
                  passionate people to work with us. Drop us your resume here
                  and we would get back to you if we have a suitable opening for
                  you.
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
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your message for us"
                    />
                  </Form.Group>
                  <Form.Group controlId="formFileLg" className="mb-3 file">
                    <Form.Label>Upload Your CV Here</Form.Label>
                    <Form.Control type="file" size="lg" />
                  </Form.Group>
                  <Button variant="primary" type="submit0" className="btn-b" style={{marginLeft:"30%"}}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} >
            <Card className="card-n" style={{marginTop:"40%"}}>
              <img src={Image} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
