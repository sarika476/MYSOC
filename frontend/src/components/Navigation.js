import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component {

  constructor(){
    super();
    this.state = {path : '/admin_services'}
    this.sample=this.sample.bind(this);
  }
  async sample(){
    // const status=JSON.parse(localStorage.getItem('user-info'));
    // console.log(status['AdminFlag']);
    // if( status['AdminFlag']){
    //   this.setState({path: '/admin_services'});
    // }else{
    //   this.setState({path: '/user_services'});
    // }
    
    var id = sessionStorage.getItem("user_id")
    var result = await fetch(`http://localhost:8081/user/isAdmin/${id}`).then((response) => {
      console.log(" hello " + response.status);
      if( response.status === 200   ){
          window.location.replace('/admin_services');
      }else{
          window.location.replace('/user_services');
      }
    })
    // console.log(" hello " + result.json());
    
      
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
            <Nav.Link onClick={this.sample}>Services</Nav.Link>
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