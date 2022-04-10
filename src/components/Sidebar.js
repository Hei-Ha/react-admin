import React  from "react";
import {Layout, Menu} from "antd";
import menus from '@/menus/menus'



const handleMenu = (menus) => {
    return menus.map((item) => {
        if (item.children?.length > 0) {
            return <Menu.SubMenu key={item.name} icon={item.icon} title={item.name}>
                {handleMenu(item.children)}
            </Menu.SubMenu>
        } else {
            return <Menu.Item key={item.path}>{item.name}</Menu.Item>
        }
    })
}




export const Sidebar = () => {
    return <>
        <Layout.Sider trigger={null} collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
                {handleMenu(menus)}
            </Menu>
        </Layout.Sider>
    </>
}