import React from 'react'
import { LayoutContainer } from '@/components/layout'
import { BrowserRouter, HashRouter } from 'react-router-dom'

export const App = () => {
    return <HashRouter>
        <LayoutContainer />
    </HashRouter>
}
