import React  from "react";
import {Layout, Menu} from "antd";
import menus from '@/menus/menus'




export const Sidebar = () => {
    return <>
        <Layout.Sider trigger={null} collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
                {menus.map((item) => {
                    return <Menu.SubMenu key={item.path} title={item.name}>
                        {item.children?.map((son) => {
                            return <Menu.Item key={son.path}>
                                {son.name}
                            </Menu.Item>
                        })}
                    </Menu.SubMenu>
                })}
            </Menu>
        </Layout.Sider>
    </>
}