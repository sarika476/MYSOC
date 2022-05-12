import { Col, Row, Table, Button, Input, Tag ,Modal} from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import Column from 'antd/lib/table/Column';

const { Search } = Input;
// let cols = [
//     {
//         title: 'Sr. No.',
//         dataIndex: 'key',
//     },
//     {
//         title: 'Category',
//         dataIndex: 'category',
//     },
//     {
//         title: 'Date',
//         dataIndex: 'date',
//     },
//     {
//         title: 'Status',
//         dataIndex: 'status',
//     },
//     {
//         title: '',
//         dataIndex: 'details',
//     },
// ];

// let comp = [
//   {
//     key: '1',
//     category: 'leakage',
//     date: "08/04/2022",
//     status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
//     details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
//   },
//   {
//     key: '2',
//     category: 'parking issue',
//     date: "01/04/2022",
//     status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
//     details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
//   },
//   {
//     key: '3',
//     category: 'leakage',
//     date: "08/04/2022",
//     status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
//     details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
//   },
// ];

export default class AdminComplains extends Component {
  state = {
    columns: [],
    complains: [],
    selected: {},
  };

  componentDidMount = () => {
    let url = `http://localhost:8081/Complaint/getComplaintByUser/`+sessionStorage.getItem("user_id");
    console.log(url);

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
    }).then(res => res.json())
      .then(response => {
        console.log(response)
        this.setState({complains: response})
      })
  }

  checkForTag = (value) => {
    let renderTab = null;
    if(value){
      renderTab = <Tag color="success">Resolved</Tag>;
    } else {
      renderTab = <Tag color="processing">Pending</Tag>;
    }
    return renderTab;
  };

  render(){   
    const { columns, complains } = this.state;

    return(
      <Layout style={{minHeight: '100vh'}}>
        <Content style={{height: '100%'}}>
           <h3 style={{padding:'20px',textAlign:'center'}}>My Complaints</h3>
         <Table style={{paddingLeft:'100px',paddingRight:'100px'}} dataSource={complains} >

                <Column key="id" dataIndex={"flat_no"} title="Flat no" />
                <Column key ="category" dataIndex={"cat"} title="Category"/>
                <Column dataIndex={"description"} title="Description"/>
                <Column dataIndex={"status"} title="Status" render={(r) => {
                  return (
                    <div>
                    {this.checkForTag(r)}
                    </div>
                  )
                }} />
         </Table>
        </Content>
      </Layout>
      
    
    )
  }
}