import React, { Component } from 'react' 
import { Link } from 'react-router-dom';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Table, Tag, Space, Button } from 'antd';
import Column from 'antd/lib/table/Column';
import ReactDOM from 'react-dom';
import './AdminMaint.css';

export default class AdminMaint extends Component{

    constructor(props) {
        super(props)   
        
        this.state = {
            api: 'http://localhost:8081/user/list',
            records: [],
            months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] ,
            targetMonth : 0,
            id: null,
        }
    }

    onApply = (record) => {
        console.log(record);
        // this.props.set_user_id(record.id);
        sessionStorage.setItem("user_id", record.id);
        window.location.replace('/admin_maint_detail')
    }

    componentDidMount() {
        fetch(this.state.api)
        .then(response => response.json())
        .then(records => {
            this.setState({
                records: records
            })
        })
        .catch(error => console.log(error))

    }
  render()
  {
    function edit(){
      window.location.replace('edit_userinfo');
    }
    
    

    return(
      
        <Layout style={{minHeight: '100vh'}}>
        <Content style={{height: '100%'}}>
          <h3 style={{padding:'20px',textAlign:'center'}}>User Information</h3>
          <Table style={{paddingLeft:'100px',paddingRight:'100px'}} dataSource={this.state.records} >

            <Column key="id" dataIndex={"id"} title="Flat no"/>
            <Column key ="Name" dataIndex={"name"} title="Name"/>
            <Column dataIndex={"contact_number"} title="Contact No."/>
            <Column key="action" title="Action" render={(r) => {
              return(
                <Button type='primary' onClick={() => this.onApply(r)}>Detail</Button>
              )
            }}></Column>

          </Table>
        </Content>
        </Layout>
    )   
  }
}

