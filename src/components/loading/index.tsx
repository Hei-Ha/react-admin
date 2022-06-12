import React from 'react'
import { Spin } from 'antd'

export const Loading = () => {
    return <>
        <div id='loading' className='flex justify-center items-center'>
            <Spin />
        </div>
    </>
}