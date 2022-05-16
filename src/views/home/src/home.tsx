import React from "react";
import './home.less'
import {ImgPlayer} from "@/views/home/imgPlayer";
import {Button, Tooltip} from '@arco-design/web-react'
import {IconRight} from '@arco-design/web-react/icon'

export const Home = (): JSX.Element => {
    const list = [
        'https://upload-images.jianshu.io/upload_images/5809200-736bc3917fe92142.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'https://upload-images.jianshu.io/upload_images/5809200-7fe8c323e533f656.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'https://upload-images.jianshu.io/upload_images/5809200-c12521fbde6c705b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        'https://upload-images.jianshu.io/upload_images/5809200-caf66b935fd00e18.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    ]
    const handleOk = () => {
        console.log('use')
    }
    const handleRefuse = () => {
        console.log('refuse')
    }
    const onChange = (item: string, index: number) => {
        console.log(item)
        console.log(index)
    }
    return <>
        <div className={'waicediv'}>
            <ImgPlayer
                imageList={list}
                ok={handleOk}
                refuse={handleRefuse}
                isShowFooter={true}
                onChange={onChange}
            >
                <Tooltip
                    position='bl'
                    trigger='hover'
                    color={'#FFFFFF'}
                    content={<div><Button>error Msg</Button></div>}>
                    <Button type={'secondary'}>
                        错误详情<IconRight />
                    </Button>
                </Tooltip>
            </ImgPlayer>
        </div>
    </>
}
