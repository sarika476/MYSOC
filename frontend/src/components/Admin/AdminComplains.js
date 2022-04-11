import { Col, Row, Table, Button, Input, Tag } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';

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

  details = (values, e) => {
    console.log(e.key())
  }

  render(){   
    const { columns, complains } = this.state;

    return(
      <Layout>
        <Content>
          <Table 
            columns={columns}
            dataSource={complains} 
            ren
        />
        </Content>
      </Layout>
    )
  }
}