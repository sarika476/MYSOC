import { Col, Row, Table, Button, Input, Tag ,Modal} from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import Column from 'antd/lib/table/Column';

const { Search } = Input;
let cols = [
    {
        title: 'Sr. No.',
        dataIndex: 'key',
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: '',
        dataIndex: 'details',
    },
];

let comp = [
  {
    key: '1',
    category: 'leakage',
    date: "08/04/2022",
    status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
    details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
  },
  {
    key: '2',
    category: 'parking issue',
    date: "01/04/2022",
    status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
    details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
  },
  {
    key: '3',
    category: 'leakage',
    date: "08/04/2022",
    status: <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>,
    details: <Button type='primary' onClick={(e) => {this.details(e)}}>details</Button>
  },
];

export default class AdminComplains extends Component {
  state = {
    columns: [],
    complains: [],
    selected: {},
  };

  componentDidMount = () => {
    this.setState({complains: comp, columns: cols})
  }
  render(){   
    const { columns, complains } = this.state;

    return(
      <Layout style={{minHeight: '100vh'}}>
        <Content style={{height: '100%'}}>
           <h3 style={{padding:'20px',textAlign:'center'}}>My Complaints</h3>
         <Table style={{paddingLeft:'100px',paddingRight:'100px'}} dataSource={complains} >

                <Column key="id" dataIndex={"columns"} title="Sr. no" />
                <Column key ="Name" dataIndex={"columns"} title="Category"/>
                <Column dataIndex={"columns"} title="Date"/>
                <Column key="action" title="Action" render={(r) => {
              return(
                 <div>
                    <Tag color='green' key="pending">{"pendind".toUpperCase()}</Tag>
                 </div> 
                
              )
            }}></Column>
         </Table>
        </Content>
      </Layout>
      
    
    )
  }
}