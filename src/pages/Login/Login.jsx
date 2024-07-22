import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import './Login.css';

const { Title } = Typography;

const Login = () => {
  return (
    <div className="container">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col >
          <div className="form-container">
            <div className="logo">
              <img src="/logo.png" alt="Logo" />
            </div>
            <Title level={2} style={{ color: '#228B22' }}>Login</Title>
            <Form
              name="login"
              layout="vertical"
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
