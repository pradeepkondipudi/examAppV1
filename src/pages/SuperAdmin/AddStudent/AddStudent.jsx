// AddStudent.js
import React, { useState } from 'react';
import { Form, Input, Button, Typography, Table, Select, DatePicker, Upload } from 'antd';
import { EditOutlined, UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import './AddStudent.css';

const { Title } = Typography;
const { Option } = Select;

const initialStudents = [
  { key: '1', name: 'Alice Johnson', gender: 'Female', dateofbirth: '2010-04-23', class: '5', examname: 'Midterm', email: 'alice.johnson@example.com', phone: '1234567890', photo: '' },
  { key: '2', name: 'Bob Smith', gender: 'Male', dateofbirth: '2009-05-14', class: '6', examname: 'Finals', email: 'bob.smith@example.com', phone: '0987654321', photo: '' },
];

const AddStudent = () => {
  const [form] = Form.useForm();
  const [students, setStudents] = useState(initialStudents);
  const [editingKey, setEditingKey] = useState('');

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      dateofbirth: values.dateofbirth.format('YYYY-MM-DD'),
    };

    if (editingKey) {
      const updatedStudents = students.map((student) =>
        student.key === editingKey ? { ...student, ...formattedValues, key: editingKey } : student
      );
      setStudents(updatedStudents);
      setEditingKey('');
    } else {
      const newStudent = { ...formattedValues, key: Date.now().toString() };
      setStudents([...students, newStudent]);
    }
    form.resetFields();
  };

  const onEdit = (record) => {
    form.setFieldsValue({
      ...record,
      dateofbirth: moment(record.dateofbirth),
    });
    setEditingKey(record.key);
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Date of Birth', dataIndex: 'dateofbirth', key: 'dateofbirth' },
    { title: 'Class', dataIndex: 'class', key: 'class' },
    { title: 'Exam Name', dataIndex: 'examname', key: 'examname' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Photo', dataIndex: 'photo', key: 'photo' },
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
    <div className="add-student-container">
      <Title level={2} style={{ color: 'forestgreen' }}>Add Student</Title>
      <Form
        form={form}
        name="add_student"
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: '600px' }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input the student\'s name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please select the student\'s gender!' }]}
        >
          <Select>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateofbirth"
          rules={[{ required: true, message: 'Please select the student\'s date of birth!' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Class"
          name="class"
          rules={[{ required: true, message: 'Please input the student\'s class!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Exam Name"
          name="examname"
          rules={[{ required: true, message: 'Please input the student\'s exam name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email ID"
          name="email"
          rules={[{ required: true, message: 'Please input the student\'s email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: 'Please input the student\'s phone number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Photo"
          name="photo"
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            {editingKey ? 'Update' : 'Submit'}
          </Button>
          <Button htmlType="button" className="cancel-button" onClick={() => {
            form.resetFields();
            setEditingKey('');
          }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={students} style={{ marginTop: '24px' }} />
    </div>
  );
};

export default AddStudent;
