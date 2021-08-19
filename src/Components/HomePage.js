import React from "react";
import "../assets/css/Index.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Img from "../assets/image/Main image.svg";
import { Button } from "react-bootstrap";
import Img2 from "../assets/image/business-and-trade 1.png";
import Img3 from "../assets/image/innovation 1.png";
import { Carousel } from "react-bootstrap";
import Img4 from "../assets/image/planet-earth 1.png";
import Img5 from "../assets/image/Design Thinking.svg";
import Img6 from "../assets/image/Agile.svg";
import { Image } from "react-bootstrap";
import Img7 from "../assets/image/main.png";
import Img8 from '../assets/image/Vector.png';

export const HomePage = () => {
  return (
    <>
      {/*Reimagine your business processes for the connected digital world */}
      <Container className="con-m">
        <Row>
          <Col sm={6}>
            <Card border="light" className="card-m">
              <Card.Body>
                <Card.Title className="title-m">
                  Reimagine your business processes for the connected digital
                  world
                </Card.Title>
                <Card.Text className="text-t">
                  Power your organization with our smart solutions developed for
                  the digital-first workforce
                </Card.Text>
                <Button variant="primary" type="submit0" className="btn-m">
                  Explore solutions
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-d">
              <img src={Img} />
            </Card>
          </Col>
        </Row>
      </Container>
      {/*Reimagine your business processes for the connected digital world End */}
      {/* Our Focus Areas */}
      <Container>
        <Row>
          <Col>
            <Card className="card-be">
              <Card.Body>
                <Card.Title className="title-be">
                  Our Focus Areas
                  <p className="border-be"></p>
                </Card.Title>
                <Card.Text className="text-mb">
                  At TESQ Labs, we always keep the problem at the centre. We
                  drill down to the root cause of those challenges and rethink
                  those solutions from the ground up leveraging modern
                  techniques and technologies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Our Focus Areas End */}
      {/*  Start */}
      <img src={Img8} className="img-d"/>
      <Container className="de-con">
        <Row>
          <Col sm className="c-de">
            <Card style={{ width: "18rem" }} className="dea-card">
              <Card.Body>
              <Card.Img variant="top" src={Img2}  className="dea-img"/>
                <Card.Title className="de-title1">Enterprise Solutions</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="c-de">
            <Card style={{ width: "18rem" }} className="dea-card">
              <Card.Body>
              <Card.Img variant="top" src={Img3} className="dea-img"/>
                <Card.Title className="de-title1">Innovation Management</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="c-de">
            <Card style={{ width: "18rem" }} className="dea-card">
              <Card.Body>
              <Card.Img variant="top" src={Img4} className="dea-img"/>
                <Card.Title className="de-title1">Sustainability Accelaration</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* End */}
      {/* Our Approach */}
      <Container className="con-bm">
        <Row>
          <Col>
            <Card className="card-bm">
              <Card.Body>
                <Card.Title className="title-bm">
                  Our Approach
                  <p className="border-bm"></p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Card className="card-dm">
              <img src={Img5} />
            </Card>
          </Col>
          <Col sm={6}>
            <Card border="light" className="card-mm">
              <Card.Body>
                <Card.Title className="title-mm">
                  Design Thinking
                  <p className="border-am"></p>
                </Card.Title>
                <Card.Text className="text-am">
                  We follow the proven design thinking methodology to develop
                  our products and solutions. This ensures that our solutions
                  tackle the challenges at the core while following all the
                  modern best practices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Our Approach End*/}
      {/*Agile*/}
      <Container className="Con">
        <Row>
          <Col sm={6}>
            <Card border="light" className="card-mn">
              <Card.Body>
                <Card.Title className="title-m">
                  Agile
                  <p className="border-ad"></p>
                </Card.Title>
                <Card.Text className="text-a">
                  For us, agile is not just a buzzword. It is the way we think.
                  It enables us to laser sharpen our solutions by offering the
                  required flexibility and room for an ever-improving product
                  mindset.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-d">
              <img src={Img6} />
            </Card>
          </Col>
        </Row>
      </Container>
      {/*Agile End */}
      {/* What our customer are saying */}
      <Container>
        <Carousel className="car-a">
          <Carousel.Item>
            <Row>
              <Col className="h-de">
                <h3>What our customer are saying</h3>
                <p className="border-de"></p>
              </Col>
            </Row>
            <Row className="r">
              <Col md={7} className="de-c">
                <Row>
                  <Col sm={1}></Col>
                  <Col sm={4}>
                <Image src={Img7} className="de-imge"  />
                </Col>
                <Col sm={5} className="h-d">
                <h4>Lorem Ipsum</h4>
                <p className="p">Founder</p>
                </Col>
                </Row>
              </Col>
              <Col md={5} className="w-de">
                <p className="w-d">
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row>
              <Col className="h-de">
                <h3>What our customer are saying</h3>
                <p className="border-de"></p>
              </Col>
            </Row>
            <Row className="r">
              <Col md className="de-c">
                <Row>
                  <Col sm={1}></Col>
                  <Col sm={4}>
                <Image src={Img7} className="de-imge"  />
                </Col>
                <Col sm={5} className="h-d">
                <h4>Lorem Ipsum</h4>
                <p className="p">Founder</p>
                </Col>
                </Row>
              </Col>
              <Col sm={5} className="w-de">
                <p className="w-d">
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row>
              <Col className="h-de">
                <h3>What our customer are saying</h3>
                <p className="border-de"></p>
              </Col>
            </Row>
            <Row className="r">
              <Col md className="de-c">
                <Row>
                  <Col sm={1}></Col>
                  <Col sm={4}>
                <Image src={Img7} className="de-imge"  />
                </Col>
                <Col sm={5} className="h-d">
                <h4>Lorem Ipsum</h4>
                <p className="p">Founder</p>
                </Col>
                </Row>
              </Col>
              <Col sm={5} className="w-de">
                <p className="w-d">
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* What our customer are saying End  */}
    </>
  );
};
