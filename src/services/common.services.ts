import { GET, POST } from '@/components/http'

export const testGetApi = (params: any) => {
    return GET('/tetsApi', params)
}

export const testPostApi = (params: any) => {
    return POST('testPost', params)
}
