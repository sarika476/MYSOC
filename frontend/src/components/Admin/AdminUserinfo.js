import React, { Component } from 'react' 
import { Link } from 'react-router-dom';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Table, Tag, Space, Button, Modal } from 'antd';
import Column from 'antd/lib/table/Column';
import ReactDOM from 'react-dom';
import './AdminUserinfo.css';
import ViewForm from "./ViewForm";
// import Modal from './Modal/Modal'

export default class AdminUserinfo extends Component{

  editFormRef = React.createRef();

    constructor(props) {
        super(props)   
        
        this.state = {
            api: sessionStorage.getItem("ip_add")+'/user/list',
            records: [],
            data: [],
            months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ] ,
            targetMonth : 0,
            id: null,
            modal_data: {}
        }
        this.showmodal = this.showmodal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.editModalForm = this.editModalForm.bind(this);
        this.fetchApi = this.fetchApi.bind(this);
    }

    onApply = (record) => {
        console.log(record);
        // this.props.set_user_id(record.id);
        sessionStorage.setItem("user_id", record.id);
        //window.location.replace('/admin_maint_detail')
    }

    showmodal = (r, e) => {
      this.setState({ show: true });
      this.setState({ modal_data: r})
    };

    fetchApi(){
        fetch(this.state.api)
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records

                },()=>{
                    console.log("from fetch api" + this.state.records)
                })
            })
            .catch(error => console.log(error))
    }

    editModalForm = () => {
      let record = this.state.modal_data;
      this.editFormRef.current.setFieldsValue({
        flatno: record.id,
        name: record.name,
        contactno: record.contact_number,
      });
      // this.fetchApi();
    };

    hideModal = () => {
      this.setState({ show: false },()=>{
        this.fetchApi();
      });
    };

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

            <Column key="id" dataIndex={"id"} title="Flat no" />
            <Column key ="Name" dataIndex={"name"} title="Name"/>
            <Column dataIndex={"contact_number"} title="Contact No."/>
            <Column key="action" title="Action" render={(r) => {
              return(
                 <div>
                    <Button type='primary' onClick={() => this.showmodal(r)}>Edit</Button>
                 </div>
                  
                  
                
              )
            }}></Column>

          </Table>
        </Content>
        <Modal
            visible={this.state.show}
            footer={null}
          >
            <ViewForm {...this} {...this.state}></ViewForm>
          </Modal>
        </Layout>
    )   
  }
}

