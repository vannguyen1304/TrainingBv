import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Baitap1 = () => {
  return (
    <Wrapper>
      <div className="block">
        <div>
          <Button
            $value="button"
            $width="50%"
            $type="primary"
            $size="sm"
            $disable
          />
          <Button
            $width="60%"
            $type="secondary"
            $size="lg"
            $disable
            $value="nguyen"
          />
          <Button $width="40%" $type="primary" $size="lg" $value="nguyen" />
          <Button $width="30%" $type="secondary" $size="base" $value="nguyen" />
        </div>
      </div>
      <div className="block">asd</div>
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
