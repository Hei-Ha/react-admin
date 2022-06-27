const routerModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/router.(js|ts|tsx)$/)

const routers = ((r) => {
    return r.keys().map(k => r(k).default)
})(routerModules)

const routerConfig = []

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
const userRules = [
    'home',
    'emperor',
    'emperorList',
]

const testRes = filterPermissions(...routers)
console.log(testRes)
console.log(123)

export default routerConfig.concat(...routers)