import react, { Component } from 'react';
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
import { UploadOutlined } from '@ant-design/icons';

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
      value: 'abc',
      label: 'abc',
    },
    {
        value: 'def',
        label: 'def',
    },
  ];

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement('img');
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'red';
            ctx.textBaseline = 'middle';
            ctx.font = '33px Arial';
            ctx.fillText('Ant Design', 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    },
  };

export default class UserComplain extends Component{
    cancel = () => {
        window.location.replace("/user_services")
    }

    submit = (value, e) => {
        console.log(value)
        // window.location.replace("/services")
    }

    render() {
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <div>
                        <Row justify='center' align='middle'>
                            <Form
                                {...formItemLayout}
                                name="register"
                                scrollToFirstError
                                style={{width: '50%'}}
                                onFinish={this.submit}
                            >
                                <Divider>Complain Form</Divider>
                                <Form.Item
                                    name="category"
                                    label="Category"
                                    rules={[
                                    { type: 'array', required: true, message: 'Please select Category!' },
                                    ]}
                                >
                                    <Cascader options={category} />
                                </Form.Item>

                                <Form.Item
                                    name="description"
                                    label="Description"
                                    rules={[
                                    {
                                        type: 'string',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    ]}
                                >
                                    <Input style={{height: '100px'}}/>
                                </Form.Item>

                                <Form.Item
                                    name="image"
                                    label="Image"
                                    rules={[
                                    {
                                        required: false,
                                        message: 'Please upload Image',
                                    },
                                    ]}
                                >
                                    <Upload {...props}>
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </Upload>
                                </Form.Item>


                                <Form.Item {...tailFormItemLayout}
                                     name= "submit"
                                >
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                    <Button htmlType="cancel" onClick={this.cancel}>
                                    Cancel
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