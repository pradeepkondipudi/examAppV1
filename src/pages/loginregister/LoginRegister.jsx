import React from 'react';
import { Form, Input, Button, Select, DatePicker, Upload, Row, Col, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './LoginRegister.css';

const { Option } = Select;
const { Title } = Typography;

const LoginRegister = () => {
  return (
    <div className="container">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col >
          <div className="form-container">
            <div className="logo">
              <img src="/logo.png" alt="Logo" />
            </div>
            <Title level={2} style={{ color: '#228B22' }}>Register</Title>
            <Form
              name="register"
              layout="vertical"
            >
              <Form.Item
                name="name"
                label="Student Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="dob"
                label="Date of Birth"
                rules={[{ required: true, message: 'Please input your date of birth!' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: 'Please select your gender!' }]}
              >
                <Select>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="class"
                label="Class"
                rules={[{ required: true, message: 'Please input your class!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="pincode"
                label="Pincode"
                rules={[{ required: true, message: 'Please input your pincode!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="photo"
                label="Photo"
                rules={[{ required: true, message: 'Please upload your photo!' }]}
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginRegister;
