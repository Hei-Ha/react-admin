import React from 'react'
import { LayoutContainer } from '@/components/layout'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
    return <BrowserRouter>
        <LayoutContainer />
    </BrowserRouter>
}
