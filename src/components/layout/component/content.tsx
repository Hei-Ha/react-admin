import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import '../layout.less'

interface propsValue {
    handleCollapsed: Function;
    collapsed: boolean;
}
export const Content = (props: propsValue): JSX.Element => {
    return <Layout className={props.collapsed ? 'collapsed' : 'noCollapsed'}>
        <Layout.Header style={{ padding: 0, background: '#FFFFFF'}}>
            {props.collapsed ?
                <MenuUnfoldOutlined
                    className={'collapsedIcon'}
                    onClick={() => { props.handleCollapsed() }} />
                :
                <MenuFoldOutlined
                    className={'collapsedIcon'}
                    onClick={() => { props.handleCollapsed() }} /> }
        </Layout.Header>
        <Layout.Content>
            content
        </Layout.Content>
    </Layout>
}