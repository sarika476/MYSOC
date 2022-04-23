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
    let id=this.props.record.id;
    let url = `http://localhost:8081/user/update/${id}`;
    let body = {
      "aid": r.aid,
      "eid": r.eid,
    }
    console.log(url, JSON.stringify(body))
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "Success") {
          console.log("Operation success!");
          message.success("Operation success!", 1);
        } else {
          console.log("Operation failure!");
          message.error(response.message, 5);
        }
      }).catch((err) => console.log(err));
  };

  
  render() {
    return (
      <Form
        layout="vertical"
        ref={this.props.editFormRef}
        onFinish={this.accept}
      >
        <Form.Item name="flatno" label="Flat No.">
          <Input />
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