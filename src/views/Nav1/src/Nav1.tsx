import React from "react";
import { Card, Form, Input, Table } from 'antd'


interface FormValues {
    name: string;
    id: number;
}
export const Nav1 = () => {
    const [form] = Form.useForm<FormValues>()

    return <>
        <Card>
            <Form
                layout={'inline'}
                form={form}>
                <Form.Item name={'name'} className={'formItem-width-180'}>
                    <Input placeholder={'请输入姓名'} />
                </Form.Item>
                <Form.Item name={'id'} className={'formItem-width-150'}>
                    <Input placeholder={'请输入 id'} />
                </Form.Item>
            </Form>
        </Card>
        <Card style={{ marginTop: '20px'}}>
            <Table />
        </Card>
    </>
}
