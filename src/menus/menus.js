const menuModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/menu.(js|ts|tsx)$/)

const menus = ((m) => {
    return m.keys().map((key) => {
        return m(key).default
    })
})(menuModules)

const res = []

export default res.concat(...menus)