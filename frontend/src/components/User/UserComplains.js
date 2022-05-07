import React, { Component } from 'react'
import {
    Form,
    Input,
    Cascader,
    Row,
    Button,
    Divider,
    Layout,
    Upload
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';




const { Header, Content, Footer, Sider } = Layout;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const category = [
    {
        value: "electric",
        label: "Electric",
    },
    {
        value: "maintainance",
        label: "Maintainance",
    },
    {
        value: "other",
        label: "Other",
    },
];




export default class UserComplains extends Component {


    constructor(props) {
        super(props)

        this.state = {
            selectedFile: [],
            des: [],
            record: [],
            category: ["Electrical", "Maintainence", "Other"],
            cat: [],
        }
        //this.uploadImage = this.uploadImage.bind(this)
        this.pushdata = this.pushdata.bind(this)
        this.cancel = this.cancel.bind(this)
        this.mycomp = this.mycomp.bind(this)
        this.desc = this.desc.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange = (e) => {

        this.setState({
            cat: e
        })

    };

    desc = (e) => {
        this.setState({
            des: e
        }, () => {
            console.log(this.state.des);
        });
    }

    cancel = () => {
        window.location.replace("/user_services")
    }
    mycomp = () => {
        window.location.replace("/my_complains")
    }
    pushdata = (record, e) => {
        console.log(record);

        let url = `http://localhost:8081/Complaint/Register`;

        let body = {
            'flat_no': parseFloat(sessionStorage.getItem("user_id")),
            'cat': record.category[0],
            'description': record.description
        }
        console.log(JSON.stringify(body))

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(response => {
                console.log(response)
                // window.location.replace('/user_services');
            })
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <div>
                        <Row justify='center' align='middle'>
                            <Form
                                name="register"
                                className="login-form"
                                style={{ width: '40%' }}
                                onFinish={this.pushdata}
                            >
                                <Divider style={{ fontSize: '100' }}>Complain Form</Divider>

                                <FormItem
                                    name="category"
                                    label="Category"
                                    rules={[
                                        {
                                            type: "array",
                                            required: true,
                                            message: "Please select your Category!",
                                        },
                                    ]}
                                >
                                    <Cascader options={category} />
                                </FormItem>

                                <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[
                                        {
                                            type: 'string',
                                            required: true,
                                            message: 'Provide your description',
                                        },
                                    ]}
                                >
                                    <Input style={{ height: '100px' }}/>
                                </Form.Item>

                                <Form.Item {...tailFormItemLayout}
                                    name="submit"
                                >
                                    <Button type="primary" htmlType='submit'>
                                        Submit
                                    </Button>
                                    <Button onClick={this.cancel}>
                                        Cancel
                                    </Button>
                                    <Button onClick={this.mycomp}>
                                        View My Complains
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Row>
                    </div>
                </Content>

            </Layout>
        )
    }
}