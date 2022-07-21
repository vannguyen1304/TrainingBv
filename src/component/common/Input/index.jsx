import React from 'react'
import 'antd/dist/antd.css';
import { InputSmallSize,InputDefaultSize,InputLargeSize } from './styled'
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";


const InputDiv = ({
    $status="default",
    $size = "default",
    $prefix = <UserOutlined/>,
    $placeholder= "Fill in",
    $width="100%",
    $height="50px",
    ...rest
}) => {
    switch($size){
        case "large": 
        return (
            <InputLargeSize
                $width={$width}
                $height={ $height}
            >
                <Input
                    status={$status}
                    size={$size}
                    prefix={$prefix}
                    placeholder={$placeholder}
                    {...rest}
                    />
            </InputLargeSize>
        ) 
        case "small": 
        return (
            <InputSmallSize
                $width={$width}
                $height={ $height}
            >
                <Input
                    status={$status}
                    size={$size}
                    prefix={$prefix}
                    placeholder={$placeholder}
                    {...rest}
                    />
            </InputSmallSize>
        ) 
        case "default": 
        return (
            <InputDefaultSize
                $width={$width}
                $height={ $height}             
            >
                <Input
                    status={$status}
                    size={$size}
                    prefix={$prefix}
                    placeholder={$placeholder}
                    {...rest}
                    />
            </InputDefaultSize>
        ) 
    }
}

export default InputDiv