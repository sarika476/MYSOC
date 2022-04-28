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
import Dropdown from 'react-bootstrap/Dropdown'




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
    action: ''
  }

  

  
export default class UserComplains extends Component{

  
  constructor(props) {
      super(props)   
      
      this.state = {
          selectedFile : [] ,
          des:[],
          record: [],
          category: ["Electrical","Maintainence","Other"],
          cat:[],
      }
      this.uploadImage = this.uploadImage.bind(this)
      this.pushdata = this.pushdata.bind(this)
      this.cancel = this.cancel.bind(this)
      this.mycomp =this.mycomp.bind(this)
      this.desc =this.desc.bind(this)
      this.handleChange = this.handleChange.bind(this)

  }
  handleChange = (e) => {
        
    this.setState({
       cat:e
    })
    
};
    
    desc=(e)=>{
        this.setState({
            des: e
        },()=>{
            console.log(this.state.des);
        });
    }
  
    cancel = () => {
        window.location.replace("/user_services")
    }
    mycomp = () => {
        window.location.replace("/my_complains")
    }
    pushdata = (record) =>{
        const formData = new FormData();
        formData.append('fno', 4 );
        formData.append('cat', this.state.cat);
        formData.append('des', this.state.des);
        formData.append('img', this.state.selectedFile);

        fetch('http://localhost:8081/Complaint/Register', {
            method: 'post',
            body: formData
        }).then(res => {
            console.log(res)
        });
    };

  uploadImage=(e)=>{
    e.preventDefault();
    this.setState({
        selectedFile: e.target.files[0]
    });
    
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
                                <Divider style={{fontSize:'100'}}>Complain Form</Divider>
                                {/* <Form.Item
                                    name="category"
                                    label="Category"
                                    rules={[
                                    { type: 'array', required: true, message: 'Please select Category!' },
                                    ]}
                                >
                                    <Cascader options={category} />
                                </Form.Item> */}
                                <FormItem>
                                <div className='col-sm-2'>
                                    <Dropdown class="dropdown" onSelect={this.handleChange}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" size='sm'>
                                        Category
                                    </Dropdown.Toggle>
                                
                                    <Dropdown.Menu > 
                                        {this.state.category.map( (category,index) => (
                                            <Dropdown.Item eventKey={category}>{category}</Dropdown.Item>
                                        ))}     
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                </FormItem>

                                <Form.Item
                                    name="des"
                                    label="Description"
                                    rules={[
                                    {
                                        type: 'string',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    ]}
                                >
                                    <Input style={{height: '100px'}} onChange={this.desc}/>
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
                                    <Input type="file" className="form-control" name="file" onChange={this.uploadImage}/>
                                    {/* <Upload>
                                        <Button icon={<UploadOutlined />} onChange={this.uploadImage}>Upload</Button>
                                    </Upload> */}
                                </Form.Item>


                                <Form.Item {...tailFormItemLayout}
                                     name= "submit"
                                >
                                    <Button type="primary" onClick={() => this.pushdata()}>
                                    Submit
                                    </Button>
                                    <Button htmlType="cancel" onClick={this.cancel}>
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