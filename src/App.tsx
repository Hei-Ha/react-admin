import React from 'react'
import { Layout } from 'antd'

import { Sidebar }  from './components/Sidebar'

export const App = (): JSX.Element => {
    return <>
        <Layout>
            <Sidebar />
        </Layout>
    </>
}