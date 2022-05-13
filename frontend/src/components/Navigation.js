import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component {

  constructor(){
    super();
    this.state = {path : '/admin_services'}
    this.sample=this.sample.bind(this);
    this.logout = this.logout.bind(this);
    
  }
  async sample(){
    
    var id = sessionStorage.getItem("user_id")
    var ip=sessionStorage.getItem("ip_add")
    var result = await fetch(`${ip}/user/isAdmin/${id}`).then((response) => {
      console.log(" hello " + response.status);
      if( response.status === 200   ){
          window.location.replace('/admin_services');
      }else{
          window.location.replace('/user_services');
      }
    })
    // console.log(" hello " + result.json());
    
      
  }   

  logout(){
    sessionStorage.setItem("logged_in", "false");
    window.location.replace('/login');
  }
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        {/* <Container> */}
        
        <Navbar.Brand href="/home">MYSOC </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link onClick={this.sample}>Services</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link onClick={this.logout}>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
        </Navbar>
    )
  }
}

export default Navigation
