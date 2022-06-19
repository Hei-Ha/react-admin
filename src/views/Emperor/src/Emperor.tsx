import React, {useEffect, useState} from "react";
import { Card, Form, Input, Table, Select, Button } from 'antd'
import {
    getDynasties as getDynastiesApi
} from '@/services/Emperor.services'


interface FormValues {
    name: string;
    id: number;
}

interface EnumObject {
    label: string | number;
    value: string | number;
}
export const Emperor = () => {
    const [form] = Form.useForm<FormValues>()
    const [dynamicList, setDynamicList] = useState<EnumObject[]>([])

    const headSearch = () => {
        console.log(form.getFieldsValue())
    }

    useEffect(() => {
        getDynastiesApi().then((res) => {
            const a = Object.keys(res.data.dynasty).map((item) => {
                return {
                    label: res.data.dynasty[item],
                    value: item
                }
            })
            setDynamicList(a)
        })
    }, [])

    const tableData = [
        {
            key: '1',
            name: '李世民',
            shiHao: '唐太宗',
            dynasty: '唐',
            time: '公元626年－649年'
        },
    ]

    const columns = [
        {
            fixed: true,
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            align: 'center' as 'center',
        },
        {
            title: '谥号',
            dataIndex: 'shiHao',
            width: 300,
            key: 'shiHao',
            align: 'center' as 'center',
        },
        {
            title: '朝代',
            dataIndex: 'dynasty',
            width: 200,
            key: 'dynasty',
            align: 'center' as 'center',
        },
        {
            title: '在位时间',
            dataIndex: 'time',
            key: 'time',
            width: 300,
            align: 'center' as 'center',
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
                    <Select placeholder={'请选择朝代'}>
                        {dynamicList.map((item) => {
                            return <Select.Option value={item.value} title={item.label} key={String(item.value) + item.label}>{item.label}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => { headSearch() }}>查询</Button>
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
