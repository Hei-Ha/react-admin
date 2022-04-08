import React from 'react'
import { Layout } from 'antd'
import { resMenus } from '@/menus/menus'
import { Sidebar }  from './components/Sidebar'

console.log(resMenus)
console.log(12)

export const App = (): JSX.Element => {
    return <>
        <Layout>
            <Sidebar />
        </Layout>
    </>
}