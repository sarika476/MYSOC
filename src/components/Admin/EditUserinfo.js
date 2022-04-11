import React, { Component } from 'react' 
import { Form, Input, InputNumber, Button } from 'antd';
import './AdminUserinfo.css';

export default class EditUserinfo extends Component{
    render()
    {
        function save(){
            window.location.replace('admin_userinfo')
        }
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          
          /* eslint-disable no-template-curly-in-string */
          const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not a valid email!',
              number: '${label} is not a valid number!',
            },
            number: {
              range: '${label} must be between ${min} and ${max}',
            },
          };
          /* eslint-enable no-template-curly-in-string */
          
          const Demo = () => {
            const onFinish = (any) => {
              console.log(any);
            };
          
            return (
              <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'flatno']} label="Flat No." rules={[{ required: true }]}>
                  <Input style={{width: '50%'}}/>
                </Form.Item>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                  <Input style={{width: '50%'}}/>
                </Form.Item>
                <Form.Item name={['user', 'contact']} label="Contact No." rules={[{ required: true }]}>
                  <Input style={{width: '50%'}} />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit" onClick={save}>
                    Save
                  </Button>
                </Form.Item>

              </Form>
            );
          };
          

        return(
            <div>
                <h1 className="divstyle">Update User Information</h1>
                <Demo />
          
            </div>
        )
            
    }
}



