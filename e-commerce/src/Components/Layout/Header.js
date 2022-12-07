import React,{Fragment} from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
// import Home from "../Navigation/Home";
// import Store from "../Navigation/Store";
// import About from "../Navigation/About";
// import BtnCart from "../Navigation/BtnCart";


const Header = (props) =>{
    return (
      <Fragment>
        <Navbar bg="dark" expand="md" variant="dark">
          <Container>
            <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
            <Nav className="me-auto" bg="dark" variant="dark" ml ="3" >
              <Nav.Link href="#Home"> Home</Nav.Link>
              
              <Nav.Link href="#Store">Store</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Cart">Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
}

export default Header ;