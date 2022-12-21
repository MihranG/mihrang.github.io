import { Button, Form, Input } from 'antd';
import formInitial from './formInitial.json';
import { useRef, useState } from 'react';
import JsonModal from './JsonModal';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
export const FormComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const formRef = useRef(null);
  const eraseForm = () => {
    setFormData(null);
    formRef.current.resetFields();
  };
  const handleSubmit = (v) => {
    setFormData(v);
    setIsOpenModal(true);
  };
  return (
    <>
      <Form
        {...formItemLayout}
        onFinish={handleSubmit}
        name={'document'}
        ref={formRef}
      >
        {formInitial.fields.map(({ label, name }, idx) => (
          <Form.Item label={label} key={idx} style={{ margin: 5 }}>
            <Form.Item name={name}>
              <Input />
            </Form.Item>
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
      {formData && (
        <JsonModal
          json={formData}
          isOpen={isOpenModal}
          closeModal={() => setIsOpenModal(false)}
          eraseForm={eraseForm}
        />
      )}
    </>
  );
};
