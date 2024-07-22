// AddTeacher.js
import React, { useState } from 'react';
import { Form, Input, Button, Typography, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './AddTeacher.css';

const { Title } = Typography;

const initialTeachers = [
  { key: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' },
  { key: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0987654321' },
];

const AddTeacher = () => {
  const [form] = Form.useForm();
  const [teachers, setTeachers] = useState(initialTeachers);
  const [editingKey, setEditingKey] = useState('');

  const onFinish = (values) => {
    if (editingKey) {
      const updatedTeachers = teachers.map((teacher) =>
        teacher.key === editingKey ? { ...teacher, ...values, key: editingKey } : teacher
      );
      setTeachers(updatedTeachers);
      setEditingKey('');
    } else {
      const newTeacher = { ...values, key: Date.now().toString() };
      setTeachers([...teachers, newTeacher]);
    }
    form.resetFields();
  };

  const onEdit = (record) => {
    form.setFieldsValue(record);
    setEditingKey(record.key);
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button icon={<EditOutlined />} onClick={() => onEdit(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div className="add-teacher-container">
      <Title level={2} style={{ color: 'forestgreen' }}>Add Teacher</Title>
      <Form
        form={form}
        name="add_teacher"
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: '400px' }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input the teacher\'s name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email ID"
          name="email"
          rules={[{ required: true, message: 'Please input the teacher\'s email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: 'Please input the teacher\'s phone number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            {editingKey ? 'Update' : 'Submit'}
          </Button>
          <Button htmlType="button" className="cancel-button" onClick={() => form.resetFields()}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={teachers} style={{ marginTop: '24px' }} />
    </div>
  );
};

export default AddTeacher;
