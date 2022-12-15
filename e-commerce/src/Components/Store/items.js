import React, { useContext } from "react";
import { Card, Container,Row,Col } from "react-bootstrap";


import ItemsForm from "./ItemsForm";
import CartContex from "../ContexApi/CartContext";


const Items= props =>{

  const Contex = useContext (CartContex)
   const addToCartHandlar = quantity=>{
     Contex.addItem({
       id: props.id,
       key:props.id,
       imageUrl: props.imageUrl,
       title: props.title,
       quantity: quantity,
       price : props.price

     });
   }

    return (
      <Container className="mt-3">
        <Row>
          <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body id={props.id}>
                  <Card.Title>{props.title}</Card.Title>
                  <span>{props.quantity}</span>
                  <div className="d-flex justify-content-between">
                    <span> ${props.price}</span>
                    <ItemsForm onAddToCart={addToCartHandlar} />
                  </div>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    );    
}


export default Items;