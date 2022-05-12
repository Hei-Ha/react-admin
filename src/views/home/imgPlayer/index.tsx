import React, {useState} from "react";
import './index.less'


interface PropValues {
    imageList: string[];
}
export const ImgPlayer = (props: PropValues): JSX.Element => {
    const [bigImgUrl, setBigImgUrl] = useState<string>('https://upload-images.jianshu.io/upload_images/5809200-736bc3917fe92142.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240')


    const handleClick = (url: string) => {
        setBigImgUrl(url)
    }

    return <>
        <div className={'container'}>
            <div className={'bigImg'}>
                <img src={bigImgUrl} alt="first" />
            </div>
            <div className={'smallImg'}>
                <ul>
                    {props.imageList.map((item) => {
                        return <img onClick={() => {handleClick(item)}} src={item} alt="item" />
                    })}
                </ul>
            </div>
        </div>
    </>
}
