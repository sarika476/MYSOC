import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component {

  constructor(){
    super();
    this.state = {path : '/admin_services'}
    this.sample=this.sample.bind(this);
  }
  sample(){
    const status=JSON.parse(localStorage.getItem('user-info'));
    console.log(status['AdminFlag']);
    if( status['AdminFlag']){
      this.setState({path: '/admin_services'});
    }else{
      this.setState({path: '/user_services'});
    }
  }

   
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        {/* <Container> */}
        
        <Navbar.Brand href="/Services">MYSOC </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href={this.state.path} onClick={this.sample}>Services</Nav.Link>
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