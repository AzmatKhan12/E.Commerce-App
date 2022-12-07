import React from "react";
import { Button } from "react-bootstrap";
import {Badge} from "react-bootstrap";

const BtnCart = props =>{
    return (
      <Button variant="primary">
        Cart <Badge bg="secondary">9</Badge>
      </Button>
    );
}

export default BtnCart