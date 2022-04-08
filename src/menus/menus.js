const menus = require.context(process.cwd(), true, /^\.\/(pages|views)(\/[\w.-]+)?\/menu.(js|ts)$/)

menus.keys().forEach((item) => {
    console.log(item)
})

export const resMenus = []