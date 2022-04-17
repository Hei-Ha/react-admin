import React  from "react";
import {Layout, Menu} from "antd";
import menus from '@/menus/menus'


interface MenuChildren {
    name: string;
    path: string;
    rules?: string[];
    children?: MenuChildren[];
}

interface MenuValues {
    weight?: number; // 菜单权重
    path: string; // 路径
    name: string; // 菜单名称
    icon?: JSX.Element; // 菜单图标
    children?: MenuChildren[]; // 子菜单
}


interface propsValue {
    collapsed: boolean;
}

const handleMenu = (menus: MenuValues[]) => {
    return menus.map((item) => {
        if (item.children?.length > 0) {
            return <Menu.SubMenu key={item.name} title={item.name} icon={item.icon}>
                {handleMenu(item.children)}
            </Menu.SubMenu>
        } else {
            return <Menu.Item key={item.path}>{item.name}</Menu.Item>
        }
    })
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
        <div className="logo" />
        <Menu theme="dark" mode="inline">
            {handleMenu(menus)}
        </Menu>
    </Layout.Sider>
}