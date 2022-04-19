const routerModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/router.(js|ts|tsx)$/)

const routers = ((r) => {
    return r.keys().map(k => r(k).default)
})(routerModules)

const routerResult = []

export default routerResult.concat(...routers)