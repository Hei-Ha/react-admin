const EnvConfig = {
    development: {
        baseURL: 'https://www.fastmock.site/mock/be49caec6ab481aca75a524228bcb36e/mock/datalist'
    },
    production: {
        baseURL: 'https://www.fastmock.site/mock/be49caec6ab481aca75a524228bcb36e/mock/datalist'
    }
}
const env = process.env.NODE_ENV
export default EnvConfig[env]
