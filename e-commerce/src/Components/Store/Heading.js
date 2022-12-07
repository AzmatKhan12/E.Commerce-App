import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";

const Heading = props =>{
    return (
      <Container fluid className="mt-3 ">
        <Row>
          <Col>
            <Card>
              <Card.Header style={{ backgroundColor: "gray" }}>
                  <h1>The Generics</h1>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
 export default Heading ;