import React from "react";
import { Home } from "@/views/home/src/home";
import { filterPermissions } from '@/utils/utils'

const routerModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/router.(js|ts|tsx)$/)

const routers = ((r) => {
    return r.keys().map(k => r(k).default)
})(routerModules)

const routerConfig = [
    {
        name: 'home',
        path: '/',
        element: <Home />
    }
]


const res = routerConfig.concat([].concat(...routers))

export default res