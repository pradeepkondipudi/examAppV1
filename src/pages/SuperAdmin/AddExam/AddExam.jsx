import React, { useState } from 'react';
import { Form, Input, Button, Typography, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './AddExam.css';

const { Title } = Typography;

const initialExams = [
  { key: '1', examName: 'Math Exam', examTime: '10:00 AM', examDuration: '2 hours', examVenue: 'Room 101', noOfQuestions: '50', pattern: 'Multiple Choice', rulesDescription: 'No cheating allowed' },
  { key: '2', examName: 'Science Exam', examTime: '1:00 PM', examDuration: '2 hours', examVenue: 'Room 102', noOfQuestions: '40', pattern: 'Short Answer', rulesDescription: 'No calculators allowed' },
];

const AddExam = () => {
  const [form] = Form.useForm();
  const [exams, setExams] = useState(initialExams);
  const [editingKey, setEditingKey] = useState('');

  const onFinish = (values) => {
    if (editingKey) {
      const updatedExams = exams.map((exam) =>
        exam.key === editingKey ? { ...exam, ...values, key: editingKey } : exam
      );
      setExams(updatedExams);
      setEditingKey('');
    } else {
      const newExam = { ...values, key: Date.now().toString() };
      setExams([...exams, newExam]);
    }
    form.resetFields();
  };

  const onEdit = (record) => {
    form.setFieldsValue(record);
    setEditingKey(record.key);
  };

  const columns = [
    { title: 'Exam Name', dataIndex: 'examName', key: 'examName' },
    { title: 'Exam Time', dataIndex: 'examTime', key: 'examTime' },
    { title: 'Exam Duration', dataIndex: 'examDuration', key: 'examDuration' },
    { title: 'Exam Venue', dataIndex: 'examVenue', key: 'examVenue' },
    { title: 'Number of Questions', dataIndex: 'noOfQuestions', key: 'noOfQuestions' },
    { title: 'Pattern', dataIndex: 'pattern', key: 'pattern' },
    { title: 'Rules Description', dataIndex: 'rulesDescription', key: 'rulesDescription' },
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
    <div className="add-exam-container">
      <Title level={2} style={{ color: 'forestgreen' }}>Add Exam</Title>
      <Form
        form={form}
        name="add_exam"
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: '600px' }}
      >
        <Form.Item
          label="Exam Name"
          name="examName"
          rules={[{ required: true, message: 'Please input the exam name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Exam Time"
          name="examTime"
          rules={[{ required: true, message: 'Please input the exam time!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Exam Duration"
          name="examDuration"
          rules={[{ required: true, message: 'Please input the exam duration!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Exam Venue"
          name="examVenue"
          rules={[{ required: true, message: 'Please input the exam venue!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Number of Questions"
          name="noOfQuestions"
          rules={[{ required: true, message: 'Please input the number of questions!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Pattern"
          name="pattern"
          rules={[{ required: true, message: 'Please input the pattern!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Rules Description"
          name="rulesDescription"
          rules={[{ required: true, message: 'Please input the rules description!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            {editingKey ? 'Update' : 'Submit'}
          </Button>
          <Button htmlType="button" className="cancel-button" onClick={() => { form.resetFields(); setEditingKey(''); }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={exams} style={{ marginTop: '24px' }} />
    </div>
  );
};

export default AddExam;
