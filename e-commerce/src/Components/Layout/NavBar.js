import React,{Fragment} from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


const NavBar = (props) =>{
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nlink" to="/Home">{props.homePage}</NavLink>
              <NavLink className="nlink" to="/store">{props.store}</NavLink>
              <NavLink className="nlink" to="/about">{props.about}</NavLink>
              <NavLink className='nlink' to="/contact">{props.contact}</NavLink>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#Cart">
                {props.cart}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar ;