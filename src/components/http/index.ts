import Axios, { AxiosRequestConfig } from 'axios'
import envConfig  from '/build/env.config'

const HTTP = Axios.create({
    baseURL: envConfig.baseURL,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar '}
})

// 请求拦截器
HTTP.interceptors.request.use((config) => {
    // do someting （携带 token）
    return config
})

HTTP.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    return response
}, () => {
    // 超出 2xx 范围的状态码都会触发该函数。
})

export const GET = (url: string, params?: object) => {
    return HTTP.get(url, {
        params
    }).then((res) => {
        if (res.status === 200) {
            return res.data
        }
    })
}

export const POST = (url: string, params: object) => {
    return HTTP.post(url, params)
}