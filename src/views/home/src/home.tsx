import React from "react";
import { Button } from "antd";
import { testGetApi, testPostApi } from '@/services/common.services'

export const Home = (): JSX.Element => {
    // const testApi = () => {
    //     console.log(1)
    //     testGetApi({id: 1})
    // }
    return <>
        <div className={'bg-stone-500'}>Welcome To ...</div>
        {/*<Button onClick={() => { testGetApi({id: 1}) }}>GET</Button>*/}
        {/*<Button onClick={() => { testPostApi({id: 2}) }}>POST</Button>*/}
    </>
}
