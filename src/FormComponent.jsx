import {Button, Form, Input} from "antd";
import formInitial from './formInitial.json'

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
export const FormComponent = () =>{
    const handleSubmit = (v) =>{
        console.log('form', v)
    }
    return <Form {...formItemLayout} onFinish={handleSubmit}  name={'document'}>
        {formInitial.fields.map(({label, name},idx)=>(
            <Form.Item label={label} key={idx} style={{margin: 5}}>
                <Form.Item name={name}>
                    <Input />
                </Form.Item>
            </Form.Item>
        ))}
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
}
