import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Baitap1 = () => {
  return (
    <Wrapper>
      <div className="block">
        <div>
          <Button disabled={true} type="secondary" size="sm" />
          <Button disabled={true} type="primary" size="lg" />
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
