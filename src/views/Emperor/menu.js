import React from "react";
import { BlockOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";

export default [
    {
        label: 'Emperor',
        key: '/emperor',
        rules: ['emperor'],
        icon: <BlockOutlined />,
        weight: 2,
        children: [
            {
                label: <Link to='/emperor/emperorList'>EmperorList</Link>,
                key: '/emperor/emperorList',
                rules: ['emperorList']
            }
        ]
    }
]