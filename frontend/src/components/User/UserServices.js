import React, { Component } from 'react'
import './UserServices.css'

import Card from 'react-bootstrap/Card'
import CardsItem from '../CardsItem'



export class UserServices extends Component {
  render() {
    return (
      <div class="main">
        <h3 style={{padding:'20px'}}> Services Available </h3>
        <div className='container subdiv'>
            <div className='row'>
                <div className='col'> 
                   <CardsItem img="images/img2.png" name="Maintenance" dest="/user_maint"></CardsItem>
                </div>
                <div className='col'> 
                    <CardsItem img="images/img4.jpg" name="Complaint" dest="/user_comp"></CardsItem>
                </div>
                <div className='col'> 
                    <CardsItem img="images/img6.png" name="Housing Services" dest="/user_housing"></CardsItem>
                </div>  
            </div>
            <div className='row'>
                <div className='col'> 
                    <CardsItem img="images/img5.jpg" name="Amenities" dest="#manthan"></CardsItem>
                </div>
                <div className='col'> 
                    <CardsItem img="images/img3.jpg" name="Parking" dest="/user_maint"></CardsItem>
                </div>           
                <div className='col'> 
                    <CardsItem img="images/img7.jpg" name="Security" dest="#manthan"></CardsItem>
                </div>
            </div>
           
        </div>
        {/* <h1> Services Available </h1> */}
      </div>
    )
  }
}

export default UserServices