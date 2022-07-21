import React from "react";
import styled from "styled-components";
import Button from "../common/Button/index.jsx";
import Input from "../common/Input";
import { UserOutlined } from "@ant-design/icons";
import SelectBase from "../common/Select/index.jsx";

const Baitap1 = () => {
  return (
    <Wrapper>
      <div className="block">
        <div>
          <Button>asdsa</Button>
          <Button $type="secondary">asdsa</Button>
          <Button $type="secondary">asdsa</Button>
          <Button $type="primary" $disabled>
            button
          </Button>
          <Button $type="secondary" $disabled>
            button
          </Button>
        </div>
      </div>
      <div className="block">
        <Input $size="small" />
        <Input
          $status="warning"
          $size="default"
          $prefix={<UserOutlined />}
          $placeholder="Warning with prefix"
          $width="200px"
          $height="40px"
        />
        <Input $size="large" $status="error" />
        <SelectBase $width="100px" $height="30px" $status="error" />
        <SelectBase $width="200px" $height="50px" />
      </div>
    </Wrapper>
  );
};

export default Baitap1;

const Wrapper = styled.div`
  padding: 50px 170px;
  display: flex;
  justify-content: space-between;
  .block {
    flex: 1;
    padding: 10px;
  }
`;
