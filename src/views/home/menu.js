export default [
    {
        path: '/home',
        name: 'Home',
        icon: 'UserOutlined',
        weight: 1,
        children: [
            {
                path: '/first',
                name: '第一',
                rules: ['testFirst']
            },
            {
                path: '/second',
                name: '第二',
                rules: ['testSecond']
            }
        ]
    }
]

// 此种写法不利于 前端做鉴权
// import React from "react";
// import { Menu } from 'antd'
// export const HomeMenu = () => {
//     return <>
//         <Menu.Item key="1">
//             nav 1
//         </Menu.Item>
//     </>
// }
