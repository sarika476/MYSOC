import React, { Component } from 'react' 
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Table, Tag, Space, Button } from 'antd';
import ReactDOM from 'react-dom';
import './AdminUserinfo.css';

export default class AdminUserinfo extends Component{
  render()
  {
    function edit(){
      window.location.replace('edit_userinfo');
    }
    
    const columns = [
      {
        title: 'FlatNo.',
        dataIndex: 'flatno',
        key: 'flatno.',
        // render: text => <a>{text}</a>,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // render: text => <a>{text}</a>,
      },
      {
        title: 'Contact No.',
        dataIndex: 'contact',
        key: 'contact',
        // render: text => <a>{text}</a>,
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        // render: (text, record) => (
        //   <Space size="middle">
        //     <button onClick={edit}>Edit</button>
        //     <button>Delete</button>
        //   </Space>
        // ),
      },
    ];
    
    const data = [
      {
        key: '1',
        flatno:'A101',
        name: 'John Brown',
        contact:'1234567890',
        action: <div><Button type='primary' onClick={edit}>Edit</Button><Button >Delete</Button></div>
      },
      {
        key: '2',
        flatno:'B102',
        name: 'Jim Green',
        contact:'1234567890',
        action: <div><Button type='primary'>Edit</Button><Button >Delete</Button></div>
      },
      {
        key: '3',
        flatno:'A102',
        name: 'Joe Black',
        contact:'1234567890',
        action: <div><Button type='primary'>Edit</Button><Button >Delete</Button></div>
      },
    ];

    return(
      
        <Layout style={{minHeight: '100vh'}}>
        <Content style={{height: '100%'}}>
          <h3 style={{padding:'20px',textAlign:'center'}}>User Information</h3>
          <Table style={{paddingLeft:'100px',paddingRight:'100px'}} columns={columns} dataSource={data} />
        </Content>
        </Layout>
    )   
  }
}

