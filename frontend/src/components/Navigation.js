import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        {/* <Container> */}
        
        <Navbar.Brand href="/Services">MYSOC </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/admin_services">Services</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/login">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
        </Navbar>
    )
  }
}

export default Navigation