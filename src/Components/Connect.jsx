import React from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";

const Connect = () => {
  return (
    <div>
      <Container fluid className="connect_container">
        <Container>
          <h3 className="mx-4">Connect</h3>
          <Row>
            <Col md={3}>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
            <Col md={3}>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
            <Col md={3}>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
            <Col md={3}>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="featured_container">
        <h3>Featured Groups</h3>
        <Carousel>
          <Carousel.Item>
            <Row className="d-flex flex-row justify-content-center">
              <Col md={3}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="Images/pics2.jpg"
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Photographer</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="Images/pics2.jpg"
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Music</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="Images/pics2.jpg"
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Fashion</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        <Button>View More</Button>
      </Container>
    </div>
  );
};

export default Connect;
