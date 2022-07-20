import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>UI Styled Guide</Title>
      <div>
        <Button onClick={() => navigate("task1")}>Task 1</Button>
        <Button onClick={() => navigate("task2")}>Task 2</Button>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 110px;
  background-color: red;
  padding: 0 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #ffffff;
  user-select: none;
`;

const Button = styled.button`
  padding: 10px;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;

  &:hover {
    background: transparent;
  }
`;
