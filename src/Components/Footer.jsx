import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer_container">
        <Container>
          <Row>
            <Col md={3}>
              <h5>Titania</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                rerum obcaecati possimus atque pariatur. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </Col>
            <Col md={3}>
              <h5>Recent Post</h5>
              <div className="d-flex flex-row ">
                <div className="me-3">
                  <h4>
                    <img
                      src="Images/testimonial-3.jpg"
                      className="img-fluid p-3 fs-1 "
                    />
                  </h4>
                </div>

                <div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
              </div>
              <div className="d-flex flex-row footer_div">
                <div className="me-3">
                  <h4>
                    <img
                      src="Images/testimonial-3.jpg"
                      className="img-fluid p-3 fs-1 "
                    />
                  </h4>
                </div>

                <div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
              </div>
              <div className="d-flex flex-row footer_div">
                <div className="me-3">
                  <h4>
                    <img
                      src="Images/testimonial-3.jpg"
                      className="img-fluid p-3 fs-1 "
                    />
                  </h4>
                </div>

                <div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <h5>Tags</h5>
            </Col>
            <Col md={3}>
              <h5>Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet consec tetur adipisicing. Lorem ipsum
                dolor.
              </p>
            </Col>
          </Row>
          <h6>
            Copyright &Copy; 2024. All Rights Reserved <span>Home</span>
          </h6>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
