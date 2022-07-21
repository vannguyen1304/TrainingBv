import styled, { css } from "styled-components";

export const SelectContainer = styled.span`
  color: red;
  display: inline-block;
  .ant-select {
    ${({ $width }) =>
      $width &&
      css`
        width: ${$width};
      `}
    ${({ $height }) =>
      $height &&
      css`
        height: ${$height};
      `}

    .ant-select-selector {
      display: flex;
      align-items: center;
      ${({ $width }) =>
        $width &&
        css`
          width: ${$width};
        `}
      ${({ $height }) =>
        $height &&
        css`
          height: ${$height};
        `}
    }
  }
  .ant-select-arrow {
    ${({ $rotate }) =>
      $rotate &&
      css`
        transform: rotate(180deg);
        transition: all 0.3s;
      `}
  }
`;
