import React from "react";
import { Container,Row,Col,Card } from "react-bootstrap";

const Heading = props =>{
    return (
      <Container fluid className="mt-3 ">
        <Row>
          <Col>
            <Card style={{ backgroundColor: "gray" }}>
              <Card.Header className="mx-auto">
                <h1 className="heading">{props.Heading}</h1>
                <h3>{props.title}</h3>
                <img src={props.url}/>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
 export default Heading ;