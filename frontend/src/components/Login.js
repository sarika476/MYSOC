import React, { useState,useEffect} from 'react'   
import { Form, Input, Button, Image, Divider, Row, Typography, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import './Login.css';
import Password from 'antd/lib/input/Password';
const myStyle={
  backgroundImage: "url('images/soc.jpg')",
  height:'100vh',
  // marginTop:'70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  opacity:0.6,
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function Login() {
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");

    async function validateLogin(){
        let  item ={id,password};
        let  result = await fetch("http://localhost:8081/user/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        console.log("done till here")
        window.location.replace("home")
    }
        return (
            <Layout className='body'>
                <Content>
                    <div style={myStyle}>
                        <Row justify='center' align='bottom'>
                          <div style={{opacity:1}}>
                          <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                style={{opacity:1}}
                                
                                // onFinish={onFinish}
                            >
                                <Title className="center_title" level={3}>MySociety</Title>
                                {/* <Divider plain>Login</Divider>     */}
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                     placeholder="Username" onChange={(e)=>setId(e.target.value)} />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={validateLogin} >
                                    Log in
                                    </Button>
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" className="login-form-button" onClick={validateLogin} >
                                    
                                    </Button>
                                </Form.Item>

                                </Form>
                          </div>
                            
                        </Row>
                    </div>
                </Content>
            </Layout>
        )  
}
export default Login;