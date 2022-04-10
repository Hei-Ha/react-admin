const routerModules = require.context(process.cwd(), true, /^\.\/(pages|views)(\/[\w.-]+)?\/router.(js|ts|tsx)$/)

const routers = ((r) => {
    return r.key().map(k => r(k))
})
export default routers