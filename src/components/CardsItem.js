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
        <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    )
  }
}

export default CardsItem