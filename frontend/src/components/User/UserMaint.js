import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './UserMaint.css'


export class UserMaint extends Component {


    constructor(props) {
        super(props)   
        this.state = {
            records: []
        }
         
    }

    componentDidMount() {
        const status=JSON.parse(localStorage.getItem('user-info'));
        fetch(`http://localhost:8081/Maitainence/getById/${status['id']}`)
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }

    // state={
    //     months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] 
    // }
    
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
                {this.state.records.map( (record,index) => (
                    <tr data-index={index}>
                         <td>{index}</td>
                         <td>{record.month}</td>
                         <td>{record.ammount}</td>
                         <td>{record.fine}</td>
                         <td>{record.ammount+record.fine}</td>
                         <td>{record.paid_on}</td>
                         <td><Button variant="secondary" >{record.status ? 'Paid' : 'Pending'}</Button></td>
                     </tr>
                ))}
                    {/* // {this.state.months.map( (month,index) => (   */}
                    {/* // <tr data-index={index}>
                    //     <td>{index}</td>
                    //     <td>{month}</td>
                    //     <td>2500</td>
                    //     <td>120</td>
                    //     <td>26120</td>
                    //     <td>12-5-2005</td>
                    //     <td><Button variant="secondary" >Secondary</Button></td>
                    // </tr>
                    //  ))}   */}
                    
                </tbody>
            </Table>
            </div></>
    )
  }
}

export default UserMaint