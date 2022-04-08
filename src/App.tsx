import React from 'react'
import { Layout } from 'antd'
// import * as test from '../src/menus/menus'
import * as test from '@/menus/menus'

import { Sidebar }  from './components/Sidebar'

export const App = (): JSX.Element => {
    return <>
        <Layout>
            <Sidebar />
        </Layout>
    </>
}