/** @format */

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Footer = (props) => {
  return (
    <Container fluid className="mt-3 ">
      <Row>
        <Col>
          <Card style={{ backgroundColor: "#00BFFF" }}>
            <Card.Header >
              <h1>{props.title}</h1>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
