import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbars from "./Navbars";

const Background = () => {
  return (
    <div>
      <Container fluid className="background_container">
        <Navbars />
        <Row>
          <Col>
            <h3>BubbyPress - Join, Share & Connect</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <Button>Register Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Background;
