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

    const tableData = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }
    ]

    const columns= [
        {
            title: 'Name',
            dataIndex: 'name',
            fixed: true,
            key: 'name',
            width: 400,
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: 500,
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: 1500,
            key: 'address',
        }
    ]
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
                        })}å
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} onClick={() => { headSearch() }}>查询</Button>
                    <Button style={{ marginLeft: '10px'}}>重置</Button>
                </Form.Item>
            </Form>
        </Card>
        <div className={'self-body'}>
            <Table
                className={'selfTable'}
                dataSource={tableData}
                columns={columns}
                pagination={{
                    total: 100
                }}
            />
        </div>
    </>
}
