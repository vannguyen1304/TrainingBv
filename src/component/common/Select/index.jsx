import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { SelectContainer } from './styled';
const { Option } = Select;


const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const SelectBase = ({
    $width="100%",
    $height="50px",
    $status='default',
    ...rest
}
) => {    
    const handleChangeArrow = ()=>{
        setRotate(prev=>!prev)
    }
    const [rotate,setRotate] = useState(false);
    return (
    <SelectContainer
        $rotate={rotate}
        $width={ $width}
        $height={ $height}
        $status={$status}
        {...rest}
    >
        <Select
        defaultValue="lucy"
        onChange={handleChange}
        onDropdownVisibleChange={()=>handleChangeArrow()}
        status={$status}
        >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
        </Select>
    </SelectContainer>

    )
}

export default SelectBase;