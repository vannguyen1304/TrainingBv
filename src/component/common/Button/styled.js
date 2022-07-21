import styled, { css } from "styled-components";

export const Button = styled.button.attrs(({ $disabled }) => {
  return {
    disabled: $disabled ? true : false,
  };
})``;

export const ButtonBase = styled(Button)`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  line-height: 24px;
  display: inline-block;

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}

  ${({ $size }) => {
    if ($size === "sm") {
      return css`
        font-size: 12px;
        padding: 6px 20px;
      `;
    }
    if ($size === "base") {
      return css`
        font-size: 16px;
        padding: 8px 24px;
      `;
    }
    if ($size === "lg") {
      return css`
        font-size: 24px;
        padding: 10px 30px;
      `;
    }
  }}
`;

export const PrimaryButton = styled(ButtonBase)`
  color: white;
  border: none;
  background: #ff0000;
  &:hover {
    background: rgba(255, 0, 0, 0.7);
    box-shadow: 0px 4px 6px rgba(194, 0, 0, 0.2);
  }
  &:focus {
    background: #c20000;
  }
  &:active {
    background: #c20000;
  }

  &:disabled {
    background: #999999;
    pointer-events: none;
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: #ff0000;
  border: 1px solid #ff0000;
  background: white;
  &:hover {
    border: 2px solid #ff0000;
  }
  &:focus {
    border: 2px solid #ff0000;
  }
  &:active {
    border: 2px solid #ff0000;
  }

  &:disabled {
    border: 1px solid #999999;
    color: #999999;
    pointer-events: none;
  }
`;
