import {
  faBook,
  faBookOpen,
  faPeopleGroup,
  faPerson,
  faShare,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="about_div">
        <FontAwesomeIcon icon={faBookOpen} className="about_icon" />
        <h5>Titania is simple, Powerful Theme with Endless Possibilities</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          excepturi soluta omnis dolor dolorum, non dolore reprehenderit quam
          maxime minima praesentium facere, aspernatur illo, eligendi molestias
          adipisci sapiente sit laudantium distinctio ipsam? Quos iste ex rerum,
          consequuntur autem laboriosam soluta, modi quaerat repellendus ab
          blanditiis officiis odit. Quas, eveniet eaque.
        </p>
      </Container>

      <Container fluid className="about_container">
        <Container>
          <Row className="">
            <Col md={3}>
              <FontAwesomeIcon icon={faPerson} />
              <h1>352</h1>
              <p>Members</p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <h1>152</h1>
              <p>Groups</p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faShare} />
              <h1>846K</h1>
              <p>Shares</p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faSheetPlastic} />
              <h1>5325</h1>
              <p>Sheets</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default About;
