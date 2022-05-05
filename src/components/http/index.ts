import Axios from 'axios'
import envConfig from 'build/env.config'

const HTTP = Axios.create({
    baseURL: envConfig.baseURL,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar '}
})

// 请求拦截器
HTTP.interceptors.request.use((config) => {
    // do someting
    return config
})