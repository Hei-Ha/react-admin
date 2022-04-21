import React from "react";
import { Card, Form, Input } from 'antd'


interface FormValues {
    name: string;
}
export const Nav1 = () => {
    const [form] = Form.useForm<FormValues>()

    return <>
        <Card>
            <Form
                form={form}>
                <Form.Item name={'name'} className={'formItem-width-120'}>
                    <Input />
                </Form.Item>
            </Form>
        </Card>
        <Card>
            table
        </Card>
    </>
}
