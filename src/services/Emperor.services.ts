import { GET, POST } from '@/components/http'

export const getDynasties = () => {
    return GET('/get_dynasties')
}
