import React from "react";
import {Layout, Menu} from "antd";
import menus from '@/menus/menus'
import { Link, useLocation } from 'react-router-dom'


interface MenuChildrenValues {
    label: string | React.ReactElement;
    path: string;
    rules?: string[];
    children?: MenuChildrenValues[];
}

interface MenuValues {
    weight?: number; // 菜单权重
    path?: string; // 路径
    label: string | React.ReactElement; // 菜单名称
    icon?: JSX.Element; // 菜单图标
    children?: MenuChildrenValues[]; // 子菜单
    rules?: string[]; // menu 权限
    key?: string;
}


interface propsValue {
    collapsed: boolean;
}


export const Sidebar = (props: propsValue) => {
    return <Layout.Sider
        trigger={null}
        collapsible={true}
        collapsed={props.collapsed}
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
        }}
    >
        <Link to={'/'}>
            <div className="logo">
                Hei-Ha
            </div>
        </Link>

        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[useLocation().pathname]}
            defaultSelectedKeys={['/']}
            items={menus}
        />
    </Layout.Sider>
}
