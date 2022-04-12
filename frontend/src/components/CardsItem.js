import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './CardsItem.css'
export class CardsItem extends Component {
  render() {
    return (
        <Card style={{ width: '18rem' }}>
        <a class= "imglink" href={this.props.dest}>
          <Card.Img class="images" variant="top" src={this.props.img} />
          </a>
        <Card.Body style={{textAlign:'center'}}>
            <Card.Title>{this.props.name}</Card.Title>
        </Card.Body>
        </Card>
    )
  }
}

export default CardsItem