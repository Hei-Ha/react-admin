const resModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/menu.(js|ts)$/)

const result = (m) => {
    return m.keys()
}

console.log(result(resModules))

export const resMenus = []