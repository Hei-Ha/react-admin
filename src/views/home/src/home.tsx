import React from "react";
import './home.less'
import {ImgPlayer} from "@/views/home/imgPlayer";

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
    const onChange = (item: string) => {
        console.log(item)
    }
    return <>
        <ImgPlayer
            imageList={list}
            ok={handleOk}
            refuse={handleRefuse}
            isShowFooter={true}
            onChange={onChange}
        />
    </>
}
