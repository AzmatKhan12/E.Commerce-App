import React,{Fragment} from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
// import Home from "../Navigation/Home";
// import Store from "../Navigation/Store";
// import About from "../Navigation/About";
 import BtnCart from "../Button/BtnCart";


const NavBar = (props) =>{
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="mx-auto" >
              <Nav.Link href="/">{props.homePage}</Nav.Link>
              <Nav.Link href="/">{props.store}</Nav.Link>
              <Nav.Link href="/">{props.about}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                {props.cart}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar ;