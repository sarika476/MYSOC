import React, { Component } from 'react' 
import { Table, Tag, Space } from 'antd';
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
        render: text => <a>{text}</a>,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Contact No.',
        dataIndex: 'contact',
        key: 'contact',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <button onClick={edit}>Edit</button>
            <button>Delete</button>
          </Space>
        ),
      },
    ];
    
    const data = [
      {
        key: '1',
        flatno:'A101',
        name: 'John Brown',
        contact:'1234567890',
        
      },
      {
        key: '2',
        flatno:'B102',
        name: 'Jim Green',
        contact:'1234567890',
      },
      {
        key: '3',
        flatno:'A102',
        name: 'Joe Black',
        contact:'1234567890',
      },
    ];

    return(
      <div>
          <h1 className="divstyle">User Information</h1>
          <Table columns={columns} dataSource={data} />
      </div>
    )   
  }
}

