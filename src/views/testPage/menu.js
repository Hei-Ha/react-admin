import React from "react";
import {BlockOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default [
    {
        label: <Link to='/testPage'>testPage</Link>,
        key: '/testPage',
        rules: ['testPage'],
        icon: <BlockOutlined />,
        weight: 2
    }
]