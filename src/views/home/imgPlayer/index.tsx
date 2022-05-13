import React, {useEffect, useState} from "react";
import {Button, Tooltip} from '@arco-design/web-react'
import {IconLeft, IconRight} from '@arco-design/web-react/icon'
import './index.less'


interface PropValues {
    imageList: string[];
    ok: Function;
    refuse: Function;
    isShowFooter: Boolean; // 是否需要 footer 按钮
    onChange: Function;
}

export const ImgPlayer = (props: PropValues): JSX.Element => {
    const [bigImageIndex, setBigImageIndex] = useState<number>(0)


    const handleClick = (index: number) => {
        setBigImageIndex(index)
    }

    useEffect(() => {
        props.onChange(props.imageList[bigImageIndex])
    }, [bigImageIndex])

    const handleNext = () => {
        const resIndex = (bigImageIndex + 1) > props.imageList.length - 1 ? 0 : bigImageIndex + 1
        setBigImageIndex(resIndex)
    }
    const handlePre = () => {
        const resIndex = (bigImageIndex - 1) < 0 ? props.imageList.length - 1 : bigImageIndex - 1
        setBigImageIndex(resIndex)
    }
    const use = () => {
        handleNext()
    }
    const useless = () => {
        handleNext()
    }

    return <>
        <div className={'container'}>
            <div className={'content'}>
                <div className={'bigImg'}>
                    <img src={props.imageList[bigImageIndex]} alt="first"/>
                </div>
                <div className={'smallImg'}>
                    <ul>
                        {props.imageList.map((item, index) => {
                            return <img className={index === bigImageIndex ? 'active' : ''} key={item + index} onClick={() => {
                                handleClick(index)
                            }} src={item} alt="item"/>
                        })}
                    </ul>
                </div>
            </div>
            {props.isShowFooter && <footer className={'footer'}>
                <Tooltip position='top' content={'快捷操作 A'}>
                    <Button className={'mr-10'} icon={<IconLeft/>} onClick={handlePre} />
                </Tooltip>
                <Tooltip position='top' content={'快捷操作 D'}>
                    <Button className={'mr-30'} icon={<IconRight/>} onClick={handleNext} />
                </Tooltip>
                <Tooltip position='top' content={'快捷操作 Z'}>
                    <Button className={'mr-10'} type={'secondary'} onClick={useless}>不可用</Button>
                </Tooltip>
                <Tooltip position='top' content={'快捷操作 C'}>
                    <Button className={'mr-20'} type={'primary'} onClick={use}>可用</Button>
                </Tooltip>
            </footer>}
        </div>
    </>
}
