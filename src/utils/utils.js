// 过滤权限

const userRules = [
    'home',
    'emperor',
    'emperorList',
    'testPage'
]
export const filterPermissions = (value) => {
    const filterRes = []
    value.forEach((item) => {
        if (item.rules?.find((r) => userRules.includes(r) )) {
            if (item.children?.length > 0) {
                item.children = filterPermissions(item.children)
            }
            filterRes.push(item)
        }
    })
    return filterRes
}