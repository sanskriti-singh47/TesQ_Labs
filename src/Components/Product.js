import React from "react";
import "../assets/css/Product.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Img1 from "../assets/image/Group.png";
import Img2 from "../assets/image/Evaluate people not paper.svg";
import Img3 from "../assets/image/Make bias free decisions.svg";
import Img4 from "../assets/image/Customizable 1.png";
import Img5 from "../assets/image/Flexible 1.png";
import Img6 from "../assets/image/Hassle Free 1.png";
import Img8 from "../assets/image/Vector.png";

export const Product = () => {
  return (
    <>
      {/*Screening candidates merely based on their resumes is archaic*/}
      <Container className="Con">
        <Row>
          <Col sm={5}>
            <Card border="light" className="card-m">
              <Card.Body>
                <Card.Title className="title-m">
                  Screening candidates merely based on their resumes is archaic
                </Card.Title>
                <Card.Text className="text-t">
                  With our RecrutR solution, evaluate every candidate for skills
                  that you really need for the job
                </Card.Text>
                <Button variant="primary" type="submit0" className="btn-m">
                  Explore solutions
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-d">
              <img src={Img1} />
            </Card>
          </Col>
        </Row>
      </Container>
      {/*Screening candidates merely based on their resumes is archaic End */}
      {/* Advantages*/}
      <Container className="Con">
        <Row>
          <Col>
            <Card className="card-b">
              <Card.Body>
                <Card.Title className="title-b">
                  Advantages
                  <p className="border-b"></p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Card className="card-d">
              <img src={Img2} />
            </Card>
          </Col>
          <Col sm={6}>
            <Card border="light" className="card-m">
              <Card.Body>
                <Card.Title className="title-a">
                  Evaluate person, not paper
                  <p className="border-a"></p>
                </Card.Title>
                <Card.Text className="text-a">
                  Companies lose out in shortlisting many great candidates due
                  to limited capabilities of traditional screening approach. The
                  best candidates often get shortlisted because their resumes
                  did not have the right ‘key words’ or because their profiles
                  did not ‘look’ promising. RecrutR works to address these
                  problems by putting the candidate at the centre and not their
                  resumes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Advantages End*/}
      {/*Make bias-free decisions*/}
      <Container className="Con">
        <Row>
          <Col sm={5}>
            <Card border="light" className="card-m">
              <Card.Body>
                <Card.Title className="title-m">
                  Make bias-free decisions
                  <p className="border-a"></p>
                </Card.Title>
                <Card.Text className="text-a">
                  Traditional screening methods tend to be biased in multiple
                  domains ranging from age to race and gender. With RecutR, you
                  focus your screening based on skills. Period.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="card-d">
              <img src={Img3} />
            </Card>
          </Col>
        </Row>
      </Container>
      {/*Make bias-free decisions End */}
      {/* How It Works */}
      <Container>
        <Row>
          <Col>
            <Card className="card-es">
              <Card.Body>
                <Card.Title className="title-es">
                  How It Works
                  <p className="border-es"></p>
                </Card.Title>
                <Card.Text className="text-es">
                  RecrutR enables you to create customized role specific
                  scenarios to evaluate candidate’s job related hard skills,
                  soft skills and cultural fit. These simulations put the
                  candidates in scanarios that they would face in their jobs.
                  Thus, candidates get scored based on skills irrespective of
                  whether it is on their resumes or not.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* How It Works End */}
      {/*Start  */}
      <Container>
        <Row>
          <Col sm>
            <Card style={{ width: "18rem" }} className="d-card">
              <Card.Body>
                <Card.Title className="d-title">Develop</Card.Title>
                <Card.Text className="d-text">
                  Develop role specific scenarios. You can also customize our
                  pre-designed curated scenario sets or get assistance from our
                  experts
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "18rem" }} className="d-card">
              <Card.Body>
                <Card.Title className="d-title">Share</Card.Title>
                <Card.Text className="d-text">
                  Share the simulation link with the applicants. Our powerful
                  admin panel provides high customizability to offer your full
                  control
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "18rem" }} className="d-card">
              <Card.Body>
                <Card.Title className="d-title">Analyze</Card.Title>
                <Card.Text className="d-text">
                  Analyze the performance. Monitor candidate performances with
                  advanced aggregated and individual reports to help you
                  shortlist the right candidates to interview for interviews
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*End  */}
      {/* RecrutR is designed for you */}
      <Container>
        <Row>
          <Col>
            <Card className="card-bes">
              <Card.Body>
                <Card.Title className="title-bes">
                  RecrutR is designed for you
                  <p className="border-bes"></p>
                </Card.Title>
                <Card.Text className="text-mes">
                  RecrutR has a solid foundation of years of scientific research
                  brought to life with the help of modern technology. At TESQ
                  Labs, we are always working closely with academic and industry
                  experts to constantly improve our product so we could develop
                  unique products offering unmatched quality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* RecrutR is designed for you End */}
      {/*  LAst Small Card Start */}
      {/*Start  */}
      <img src={Img8} className="img-ds" />
      <Container className="des-con">
        <Row>
          <Col sm className="c-des">
            <Card style={{ width: "18rem" }} className="des-card">
              <Card.Body>
                <Card.Img variant="top" src={Img4} className="des-img" />
                <Card.Title className="des-text1">Customizable</Card.Title>
                <Card.Text className="des-title">
                  Customize the user interface to reflect your brand, from your
                  color scheme andlogo to your complete branding language
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="c-des">
            <Card style={{ width: "18rem" }} className="des-card">
              <Card.Body>
                <Card.Img variant="top" src={Img5} className="des-img" />
                <Card.Title className="des-text1">Flexible</Card.Title>
                <Card.Text className="des-title">
                  Use this as a stand-alone tool or use it to complement your
                  existing screening process
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm className="c-des">
            <Card style={{ width: "18rem" }} className="des-card">
              <Card.Body>
                <Card.Img variant="top" src={Img6} className="des-img" />
                <Card.Title className="des-text1">Hassle-free</Card.Title>
                <Card.Text className="des-title">
                  Start easy by using our cloud or deploy to your own servers
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* small Card End */}
    </>
  );
};
