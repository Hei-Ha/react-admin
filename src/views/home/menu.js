import React from "react";
import { UserOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";

export default [
    {
        label: <Link to='/'>Home</Link>,
        key: '/',
        icon: <UserOutlined />,
        weight: 1
    }
]

// {
//     path: '/home',
//         label: 'Home',
//     icon: <UserOutlined />,
//     weight: 1,
//     children: [
//     {
//         path: '/first',
//         label: '第一',
//         rules: ['testFirst']
//     },
//     {
//         path: '/second',
//         label: '第二',
//         rules: ['testSecond']
//     }
// ]
// },
// {
//     path: '/haha',
//         label: 'haha',
//     icon: <UserOutlined />,
//     weight: 1,
//     children: [
//     {
//         path: '/third',
//         label: '第三',
//         children: [
//             {
//                 path: '/third_first',
//                 label: '第三，第一',
//                 rules: ['test31']
//             }
//         ]
//     },
//     {
//         path: '/fourth',
//         label: '第四',
//         rules: ['testSecond']
//     },
// ]
// }


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
