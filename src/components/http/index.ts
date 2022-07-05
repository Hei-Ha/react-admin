import Axios, { AxiosRequestConfig } from 'axios'
import envConfig  from '/build/env.config'
import { message } from 'antd'
import { Loading } from '@/components/loading'
import ReactDom from "react-dom";

let loadingCount = 0
const HTTP = Axios.create({
    baseURL: envConfig.baseURL,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar '}
})

// 请求拦截器
HTTP.interceptors.request.use((config) => {
    if (loadingCount <= 0) {
        showLoading()
    }

    // do someting （携带 token）
    return config
})

HTTP.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    if (loadingCount - 1 <= 0) {
        closeLoading()
    }
    if (response.data.status !== 0) {
        message.error(response.data.errorMsg)
        return
    }
    return response
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    message.destroy(); // 先关闭其他提示消息
    switch (true) {
        case error.response.status === 400:
            message.error('错误请求！');
            break
        case error.response.status === 401:
            message.error('登陆过期，请重新登录!');
            break
        case error.response.status === 404:
            message.error('请求错误，未找到资源！');
            break
        case error.response.status >= 500:
            message.error('服务端错误');
            break
        default:
            message.error('未知错误！');
    }
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

const showLoading = () => {
    loadingCount = loadingCount + 1
}
const closeLoading = () => {
    console.log('关闭弹窗')
}