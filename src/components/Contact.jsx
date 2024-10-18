import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center mb-2 mt-5">¡Hablemos!</h2>
        <p className="text-center">Siempre estoy dispuesta a charlar</p>
        <Row className="justify-content-center">
          <Col md={6} className="text-center mb-5">
            <div className="email-contact">
              <p>
                Escríbeme a mi correo electrónico:
                <span className="email"> licetlemusq@gmail.com </span>
              </p>
              <FaEnvelope className="icon" />
            </div>
          </Col>
          <Col md={6} className="text-center mb-3">
            <div className="social-contact">
              <p>O un mensaje directo a mis redes sociales:</p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="link" className="icon">
                    <FaFacebook />
                  </Button>
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="link" className="icon">
                    <FaTwitter />
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
