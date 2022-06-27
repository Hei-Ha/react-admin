import React from "react";
import { filterPermissions } from '@/utils/utils'

const menuModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/menu.(js|ts|tsx)$/)

const menus = ((m) => {
    return m.keys().map((key) => {
        return m(key).default
    })
})(menuModules)

const res = [].concat(...menus)

// 按照 weight 排序
res.sort((a, b) => a.weight - b.weight)



export default filterPermissions(res)
