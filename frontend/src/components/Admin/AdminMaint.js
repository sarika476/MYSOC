import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './AdminMaint.css'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


export class AdminMaint extends Component {

    constructor(props) {
        super(props)   
        
        this.state = {
            api: 'http://localhost:8081/Maitainence/getList',
            records: [],
            months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] ,
            targetMonth : 0,
           
            // status : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.statusChange = this.statusChange.bind(this)
    }
    
    fetchApi(){
        fetch(this.state.api)
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records

                })
            })
            .catch(error => console.log(error))
    }
    handleChange2 = (e) => {
        
        // fetch(`http://localhost:8081/Maitainence/geMonthly/${e}`)
        //     .then(response => response.json())
        //     .then(records => {
        //         this.setState({
        //             records: records

        //         })
        //     })
        //     .catch(error => console.log(error))
        if( e === 'Paid' ){
            this.setState({
                api: 'http://localhost:8081/Maitainence/getList'
            }, () => {
                this.fetchApi();
            })
        }else{
            
            this.setState({
                api : 'http://localhost:8081/Maitainence/getRemaining'
            }, () => {
                this.fetchApi();
            })
        }
        
        
        
    };

    handleChange = (e) => {
        
        this.setState({
            api : `http://localhost:8081/Maitainence/geMonthly/${e}`
        }, () => {
            this.fetchApi();
        })
        
    };

    async statusChange(id,index){
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };
        // index = index+1;
        const response = await fetch(`http://localhost:8081/Maitainence/updateStatus/${id}/${index}/2021`, requestOptions);
        const data = await response.json();
        console.log(data);
        // calling api for full list

        fetch(this.state.api)
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records

                })
            })
            .catch(error => console.log(error))

        
        
    }
    componentDidMount() {
        // fetch(this.state.api)
        //     .then(response => response.json())
        //     .then(records => {
        //         this.setState({
        //             records: records
        //         })
        //     })
        //     .catch(error => console.log(error))
        this.fetchApi();
    }
  render() {
    return (
        <><div class="maintenance">
            <h3 style={{padding:'20px'}}> Maintenance Info </h3>
            <div>
                <div className='row table_main'>
                    <div className='col-sm-8'></div>
                    <div className='col-sm-2'>
                        <Dropdown class="dropdown" onSelect={this.handleChange}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size='sm'>
                            Month
                        </Dropdown.Toggle>
                    
                        <Dropdown.Menu > 
                            {this.state.months.map( (month,index) => (
                                <Dropdown.Item eventKey={month}>{month}</Dropdown.Item>
                            ))}     
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='col-sm-2'>

                        <Dropdown class="dropdown" onSelect={this.handleChange2}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size='sm'>
                            Status
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey='Paid'>Paid</Dropdown.Item>
                            <Dropdown.Item eventkey='Pending'>Pending</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
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
                    {/* {this.state.months.map( (month,index) => (  
                    <tr data-index={index}>
                        <td>{index}</td>
                        <td>{month}</td>
                        <td>2500</td>
                        <td>120</td>
                        <td>26120</td>
                        <td>12-5-2005</td>
                        <td><Button variant="secondary" >Secondary</Button></td>
                    </tr>
                     ))}   */}
                    {this.state.records.map( (record,index) => (
                        <tr data-index={index}>
                            <td>{index}</td>
                            <td>{this.state.months[record.month-1]}</td>
                            <td>{record.ammount}</td>
                            <td>{record.fine}</td>
                            <td>{record.ammount+record.fine}</td>
                            <td>{record.paid_on}</td>
                            <td><Button variant="secondary"  onClick={()=>this.statusChange(record.id,record.month)}>{record.status ? 'Paid' : 'Pending'}</Button></td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
            </div></>
    )
  }
}

export default AdminMaint