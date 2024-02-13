import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container fluid className="contact_container">
        <Container>
          <h2>Don't wait! Sign Up Now!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quos, animi! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Est itaque vel omnis sapiente quibusdam culpa ea doloremque
            commodi quisquam cum.
          </p>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={2}>
              <Card>
                <div className="contact_discount">
                  <h5>$199</h5>
                  <p>Discount</p>
                </div>

                <Card.Body>
                  <Card.Title>Basic</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button className="contact_btn">Purchase Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <div className="contact_discount">
                  <h5>$299</h5>
                  <p>Discount</p>
                </div>
                <Card.Body>
                  <Card.Title>Standard</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button className="contact_btn">Purchase Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <div className="contact_discount">
                  <h5>$399</h5>
                  <p>Discount</p>
                </div>
                <Card.Body>
                  <Card.Title className="text-danger">Professional</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button className="contact_btns">Purchase Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card>
                <div className="contact_discount">
                  <h5>$499</h5>
                  <p>Discount</p>
                </div>
                <Card.Body>
                  <Card.Title>Ultimate</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button className="contact_btn">Purchase Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
