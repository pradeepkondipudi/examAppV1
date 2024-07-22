// Dashboard.js
import React from 'react';
import { Layout, Menu, Avatar, Card, Row, Col } from 'antd';
import { UserOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import AddTeacher from '../AddTeacher/AddTeacher';
import AddStudent from '../AddStudent/AddStudent';
import './Dashboard.css';
import AddExam from '../AddExam/AddExam';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background" style={{ backgroundColor: 'forestgreen' }}>
        <div className="logo">
          <img src="./vite.svg" alt="logo" style={{ width: '32px', padding: '10px' }} />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          style={{ height: '100%', borderRight: 0, backgroundColor: 'forestgreen', color: 'white' }}
        >
          <Menu.Item key="dashboard" icon={<UserOutlined style={{ color: 'white' }} />} style={{ backgroundColor: 'forestgreen' }}>
            <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="students" icon={<UserOutlined style={{ color: 'white' }} />} style={{ backgroundColor: 'forestgreen' }}>
            <Link to="/dashboard/students" style={{ color: 'white' }}>Students</Link>
          </Menu.Item>
          <Menu.Item key="teachers" icon={<TeamOutlined style={{ color: 'white' }} />} style={{ backgroundColor: 'forestgreen' }}>
            <Link to="/dashboard/teachers" style={{ color: 'white' }}>Teachers</Link>
          </Menu.Item>
          <Menu.Item key="exams" icon={<TeamOutlined style={{ color: 'white' }} />} style={{ backgroundColor: 'forestgreen' }}>
            <Link to="/dashboard/exams" style={{ color: 'white' }}>Exams</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'forestgreen', color: 'white' }}>
          <div className="header-content">
            <div className="header-left">
              <Avatar size="large" icon={<UserOutlined />} />
              <span className="username">Super Admin</span>
            </div>
            <div className="header-right">
              <SettingOutlined style={{ fontSize: '24px', color: 'white' }} />
            </div>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              <Route path="/" element={
                <Row gutter={16}>
                  <Col span={12}>
                    <Card title="Students Count" bordered={false}>
                      <p>Number of students: 500</p>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="Teachers Count" bordered={false}>
                      <p>Number of teachers: 30</p>
                    </Card>
                  </Col>
                </Row>
              } />
              <Route path="students" element={<AddStudent/>} />
              <Route path="teachers" element={<AddTeacher />} />
              <Route path="exams" element={<AddExam />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
