import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Header, Content, Footer } = Layout
import '../layout.less'
import { Routes, Route } from 'react-router-dom'
import routerConfig from '@/router/router'

interface propsValue {
    handleCollapsed: Function;
    collapsed: boolean;
}
export const ContentContainer = (props: propsValue): JSX.Element => {
    return <Layout className={props.collapsed ? 'collapsed' : 'noCollapsed'} style={{ height: '100%'}}>
        <Header style={{ padding: 0, background: '#FFFFFF'}}>
            {props.collapsed ?
                <MenuUnfoldOutlined
                    className={'collapsedIcon'}
                    onClick={() => { props.handleCollapsed() }} />
                :
                <MenuFoldOutlined
                    className={'collapsedIcon'}
                    onClick={() => { props.handleCollapsed() }} /> }
        </Header>
        <Content className={'contentContinuer'}>
            <Routes>
                {routerConfig.map((item) => {
                    return <Route path={item.path} element={item.element} key={item.path} />
                })}
            </Routes>
        </Content>
        <Footer className={'footer'}>
            Design of AntD
        </Footer>
    </Layout>
}
