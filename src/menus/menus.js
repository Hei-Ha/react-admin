import React from "react";
import { filterPermissions } from '@/utils/utils'
import {Link} from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const menuModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/menu.(js|ts|tsx)$/)

const menus = ((m) => {
    return m.keys().map((key) => {
        return m(key).default
    })
})(menuModules)


const home = [
    {
        label: <Link to='/'>Home</Link>,
        key: '/',
        icon: <UserOutlined />,
        weight: 1
    }
]

const resMenu = filterPermissions([].concat(...menus))
// 按照 weight 排序
resMenu.sort((a, b) => a.weight - b.weight)

export default home.concat(resMenu)
