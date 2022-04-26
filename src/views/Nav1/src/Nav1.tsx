import React from "react";
import { Card, Form, Input, Table, Select, Button } from 'antd'
import { ID } from '@/common/constants'


interface FormValues {
    name: string;
    id: number;
}
export const Nav1 = () => {
    const [form] = Form.useForm<FormValues>()

    const headSearch = () => {
        console.log(form.getFieldsValue())
    }

    return <>
        <Card>
            <Form
                layout={'inline'}
                form={form}>
                <Form.Item name={'name'} className={'formItem-width-180'}>
                    <Input placeholder={'请输入姓名'} />
                </Form.Item>
                <Form.Item name={'id'} className={'formItem-width-150'}>
                    <Select placeholder={'请选择 ID'}>
                        {ID.map((item) => {
                            return <Select.Option value={item.value} title={item.label} key={item.value + item.label}>{item.label}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} onClick={() => { headSearch() }}>查询</Button>
                    <Button style={{ marginLeft: '10px'}}>重置</Button>
                </Form.Item>
            </Form>
        </Card>
        <Card style={{ marginTop: '20px'}}>
            <Table />
        </Card>
    </>
}
