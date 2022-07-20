import React from "react";
import styled from "styled-components";

const Button = ({ type, size, disabled, isFullWidth }) => {
  return (
    <ButtonBase
      type={type}
      size={size}
      disabled={disabled}
      isFullWidth={isFullWidth}
    >
      Button
    </ButtonBase>
  );
};

export default Button;

const ButtonBase = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  line-height: 24px;
  display: inline-block;
  // type
  ${(props) => {
    switch (props.type) {
      case "primary":
        return `
          color: white;  
          border: none;
          background: #FF0000;
          &:hover {
            background: rgba(255, 0, 0, 0.7);
            /* Dropshadow red */
            box-shadow: 0px 4px 6px rgba(194, 0, 0, 0.2);            
          }
          &:focus {
            background: #C20000;
          }
          &:active {
            background: #C20000;
          }
        `;
      case "secondary":
        return `
          color: #FF0000;
          border: 1px solid #FF0000;
          background: white;
          &:hover {
            border: 2px solid #FF0000;          
          }
          &:focus {
            border: 2px solid #FF0000;
          }
          &:active {
            border: 2px solid #FF0000;
          }

        `;
      default:
        return `
          color: white;  
          border: none;
          background: #FF0000;
          &:hover {
            background: rgba(255, 0, 0, 0.7);
            /* Dropshadow red */
            box-shadow: 0px 4px 6px rgba(194, 0, 0, 0.2);            
          }
          &:focus {
            background: #C20000;
          }
          &:active {
            background: #C20000;
          }
        `;
    }
  }};

  // size
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          font-size: 12px;
          padding: 6px 20px;
        `;
      case "lg":
        return `
        font-size: 24px;
        padding: 10px 30px;
        `;
      default:
        return `
        font-size: 16px;
        padding: 8px 24px;
        `;
    }
  }};

  // status

  ${(props) => {
    if (props.disabled && props.type === "primary") {
      return `
        background: #999999;
        pointer-events: none;
        `;
    }

    if (props.disabled && props.type === "secondary") {
      return `
        border: 1px solid #999999;
        color:#999999;
        pointer-events: none;
          `;
    }
  }}

  //   full width
  width: ${(props) => (props.isFullWidth ? "100%;display: block;" : "auto")};
`;
