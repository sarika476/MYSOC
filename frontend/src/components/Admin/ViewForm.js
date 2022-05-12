import React, { Component } from "react";
import { Button, Input, Form, message } from "antd";

export default class ViewApp extends Component {
  componentDidMount = () => {
    this.props.editModalForm();
  };

  componentDidUpdate = () => {
    this.props.editModalForm();
  };

  accept = (r, e) => {
    // console.log("hello " + r.flatno + " world " + r.contactno);
    let id = r.flatno;
    let name = r.name;
    let contact_number = r.contactno;
    let password = this.props.modal_data.password;
    let url = sessionStorage.getItem("ip_add")+`/user/update/${id}`;
    let item = {
      name ,
      contact_number,
      password 

    } 
    console.log(url, JSON.stringify(item))
    
        let  result = fetch(url,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        this.props.hideModal()
  };

  
  render() {
    return (
      <Form
        layout="vertical"
        ref={this.props.editFormRef}
        onFinish={this.accept}
      >
        <Form.Item name="flatno" label="Flat No.">
          <Input disabled/>
        </Form.Item>

        <Form.Item name="name" label="Name">
        <Input />
        </Form.Item>

        <Form.Item name="contactno" label="Contact No.">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType={"accept"}>Save</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={this.props.hideModal}>Cancel</Button>
        </Form.Item>
      </Form>
    );
  }
}