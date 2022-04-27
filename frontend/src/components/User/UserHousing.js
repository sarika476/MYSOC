import React, { Component } from 'react';
import { List, Avatar, Space, Divider, Typography } from 'antd';
import { Card, Col, Row } from 'antd';

export default class UserHousing extends Component {
    render(){
        return(
            <div className="site-card-wrapper">
                <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                    Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                    Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                    Card content
                    </Card>
                </Col>
                </Row>
            </div>
        );
        
    }
}