import ReactDom from 'react-dom'
import React from 'react'
import { App } from './App.tsx'
import 'antd/dist/antd.css'
import './index.less'
import './utils/utils.less'

ReactDom.render(<App />, document.getElementById('root'))
