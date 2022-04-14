import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './UserMaint.css'


export class UserMaint extends Component {

    state={
        months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] 
    }
    
  render() {
    return (
        <><div class="maintenance">
            <h3 style={{padding:'20px'}}> Maintenance Info </h3>
            </div>
            <div class="main_table">
            <Table class="main_table" striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Month</th>
                        <th>Maintenance</th>
                        <th>Fine</th>
                        <th>Total amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.state.months.map( (month,index) => (  
                    <tr data-index={index}>
                        <td>{index}</td>
                        <td>{month}</td>
                        <td>2500</td>
                        <td>120</td>
                        <td>26120</td>
                        <td>12-5-2005</td>
                        <td><Button variant="secondary" >Secondary</Button></td>
                    </tr>
                     ))}  
                    
                </tbody>
            </Table>
            </div></>
    )
  }
}

export default UserMaint