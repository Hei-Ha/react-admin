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
    'emperor',
    'emperorList',
    'testPage'
]

// 过滤权限
const filterPermissions = (value) => {
    return value.map((item) => {
        if (item.rules.find((r) => userRules.includes(r))) {
            if (item.children) {
                return filterPermissions(item.children)
            } else {
                return item
            }
        }
    })

}


// const resultMenus = filterPermissions()

export default res
