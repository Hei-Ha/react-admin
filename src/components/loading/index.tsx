import React, { useEffect, useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import ReactDom from "react-dom";

export const LoadingPage = () => {
    const [loadingCounter, setLoadingCounter] = useState<number>(0)

    useEffect(() => {
        if (loadingCounter <= 0) {
            document.removeChild(document.getElementById('loading'))
        }
    }, [loadingCounter])

    const show = () => {
        if (loadingCounter <= 0) {
            const divDom = document.createElement('div')
            divDom.setAttribute('id', 'loading')
            document.appendChild(divDom)
            ReactDom.render(<Spin tip='hahaha...'  />, divDom)
        }
        setLoadingCounter(loadingCounter + 1)
    }

    const close = () => {
        setLoadingCounter(loadingCounter - 1)
    }

    return {
        show,
        close
    }
}

