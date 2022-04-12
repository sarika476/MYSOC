import React, { Component } from 'react'
// import './CardsItem'
import Card from 'react-bootstrap/Card'
import CardsItem from '../CardsItem'
import './AdminServices.css'


export class AdminServices extends Component {
  render() {
    return (
      <div class="main">
        <h1> Admin Services Available </h1>
        <div className='container subdiv'>
            <div className='row'>
                <div className='col'> 
                   <CardsItem img="images/img2.png" name="User Information" dest="/admin_userinfo"></CardsItem>
                </div>
                <div className='col'> 
                   <CardsItem img="images/img2.png" name="Maintenance" dest="/admin_maint"></CardsItem>
                </div>

                <div className='col'> 
                    <CardsItem img="images/img3.jpg" name="Parking" dest="#manthan"></CardsItem>
                </div>

                <div className='col'> 
                    <CardsItem img="images/img6.png" name="Complains" dest="/admin_complain"></CardsItem>
                </div>

                
            </div>
            <div className='row'>
                <div className='col'> 
                    <CardsItem img="images/img5.jpg" name="Amenities" dest="#manthan"></CardsItem>
                </div>

                <div className='col'> 
                    <CardsItem img="images/img6.png" name="Housing Services" dest="#manthan"></CardsItem>
                </div>

                <div className='col'> 
                    <CardsItem img="images/img7.jpg" name="Security" dest="#manthan"></CardsItem>
                </div>
            </div>
           
        </div>
      </div>
    )
  }
}

export default AdminServices