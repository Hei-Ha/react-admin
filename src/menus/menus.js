import React from "react";

const menuModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/menu.(js|ts|tsx)$/)

const menus = ((m) => {
    return m.keys().map((key) => {
        return m(key).default
    })
})(menuModules)

const res = [].concat(...menus)

// 按照 weight 排序
res.sort((a, b) => a.weight - b.weight)

const userRules = [
    'home',
    'emperor',
    'emperorList',
    // 'testPage',
]

// 过滤权限
const filterPermissions = (value) => {
    const filterRes = []
    value.forEach((item) => {
        if (item.rules?.find((r) => userRules.includes(r) )) {
            if (item.children?.length > 0) {
                item.children = filterPermissions(item.children)
            }
            filterRes.push(item)
        }
    })
    return filterRes
}

// const testRules = [
//     {
//         key: 'first',
//         rules: ['first']
//     },
//     {
//         key: 'second',
//         rules: ['second'],
//         children: [
//             {
//                 key: 'second-one',
//                 rules: ['second-one']
//             },
//             {
//                 key: 'second-two',
//                 rules: ['second-two'],
//                 children: [
//                     {
//                         key: 'second-two-1',
//                         rules: ['second-two-1']
//                     },
//                     {
//                         key: 'second-two-2',
//                         rules: ['second-two-2']
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         key: 'third',
//         rules: ['third']
//     }
// ]

export default filterPermissions(res)
