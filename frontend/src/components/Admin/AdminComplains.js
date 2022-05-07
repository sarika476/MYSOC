import { Col, Row, Table, Button, Input, Tag ,Modal} from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import Column from 'antd/lib/table/Column';
import Item from 'antd/lib/list/Item';

const { Search } = Input;

export default class AdminComplains extends Component {
  constructor(props){
    super(props);
  } 

  state = {
    columns: [],
    complains: [],
    selected: {},
  };

  componentDidMount = () => {
    let url = `http://localhost:8081/Complaint/GetAllComplaints`;

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
   
  resolve = (r) => {
    let skey= r.skey;
    let fno=r.flat_no;
    let url = `http://localhost:8081/Complaint/updateComplaintStatus/`+skey+'/'+fno;
    console.log(url)

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
    }).then(res => res.json())
      .then(response => {
        console.log(response)
      })
  }


  render(){   
    const { columns, complains } = this.state;

    return(
      <Layout style={{minHeight: '100vh'}}>
        <Content style={{height: '100%'}}>
           <h3 style={{padding:'20px',textAlign:'center'}}>User Complaints</h3>
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

                <Column key="action" title="Action" render={(r) => {
                  return(
                    <div>
                        <Button type='primary' onClick={() => this.resolve(r)}>Resolve</Button>
                    </div>
                  )
                }}></Column>
         </Table>
                </Content>
      </Layout>
      
    
    )
  }
}