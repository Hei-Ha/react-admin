import React, {useRef} from "react";
import { Modal, Form, Checkbox, Radio, Select, Tooltip, Input } from "@arco-design/web-react";
import { IconQuestionCircle } from '@arco-design/web-react/icon';

interface PropsValues {
    visible: boolean;
    closeVisible: Function;
}

export const ProblemRecordModal = (props: PropsValues) => {
    const formRef = useRef()

    const onOk = () => {
        console.log(formRef)
        props.closeVisible()
    }
    const onCancel = () => {
        props.closeVisible()
    }

    const checkoutOptions = [
        {
            label: '倾斜',
            value: 'slant'
        },
        {
            label: '重影',
            value: 'ghosting'
        },
        {
            label: '位移',
            value: 'shift'
        }
    ]
    const missingDataOptions = [
        {
            label: '相机',
            value: 'camra'
        },
        {
            label: '地图',
            value: 'map'
        },
        {
            label: '激光雷达',
            value: 'lidar'
        }
    ]
    const weatherOptions = [
        {
            label: '',
            value: ''
        }
    ]
    const isMatching = [
        {
            label: '匹配',
            value: '1'
        },
        {
            label: '不匹配',
            value: '2'
        }
    ]
    return <Modal
        title='Run 问题记录'
        visible={props.visible}
        onOk={() => onOk()}
        onCancel={() => onCancel()}
        focusLock={true}
    >
        <Form
            labelAlign={'right'}
            ref={formRef}
        >
            <Form.Item label={'点云情况'} field={'point_cloud'}>
                <Checkbox.Group
                    options={checkoutOptions}
                />
            </Form.Item>
            <Form.Item label={'数据缺失情况'} field={'data_lose'}>
                <Checkbox.Group
                    options={missingDataOptions}
                />
            </Form.Item>
            <Form.Item label={'红绿灯可标注'} field={'traffic_light'}>
                <Radio.Group>
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label={'特殊天气'} field={'special_weather'}>
                <Select
                    placeholder='请选择'>
                    {weatherOptions.map((item) => {
                        return <Select.Option key={item.label} value={item.value}>{item.label}</Select.Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item label={
                <span>匹配情况
                    <Tooltip position={'rb'} content={'相机与 Lider 匹配情况，匹配情况均为下拉单选'}>
                        <IconQuestionCircle />
                    </Tooltip>
                </span>}
            >
                <div style={{ borderStyle: "solid", borderWidth: '1px', borderColor: '#CCCCCC', paddingLeft: '10px', paddingTop: '10px'}}>
                    <Form.Item label={'静态匹配'} field={'static_match'}>
                        <Select
                            placeholder='请选择匹配情况'>
                            {isMatching.map((item) => {
                                return <Select.Option key={item.label} value={item.value}>{item.label}</Select.Option>
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label={'动态匹配'} field={'dynamic_match'}>
                        <Select
                            placeholder='请选择匹配情况'>
                            {isMatching.map((item) => {
                                return <Select.Option key={item.label} value={item.value}>{item.label}</Select.Option>
                            })}
                        </Select>
                    </Form.Item>
                </div>
            </Form.Item>
            <Form.Item label={'备注'} field={'comment'}>
                <Input.TextArea
                    placeholder={'请输入补充信息。'}
                />
            </Form.Item>
        </Form>
    </Modal>
}