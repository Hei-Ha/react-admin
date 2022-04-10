import React from 'react'
import { Layout } from 'antd'
// import menus  from '@/menus/menus'
import routers from '@/router/router'
import { Sidebar }  from './components/Sidebar'


export const App = (): JSX.Element => {
    return <>
        <Layout>
            <Sidebar />
        </Layout>
    </>
}